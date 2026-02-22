"use client";

import { useState, useEffect, useRef } from "react";
import data from "../data/data.json";
import Image from "next/image";
import { usePersonalBest } from "./PersonalBestContext";
import Confetti from "react-confetti";

type DifficultyType = "" | "easy" | "medium" | "hard";

function Test() {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [time, setTime] = useState(60);
  const [pb, setPb] = useState();
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [difficulty, setDifficulty] = useState<DifficultyType>("easy");
  const [mode, setMode] = useState<"timed" | "passage" | "">("");
  const [typed, setTyped] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const caretIndex = typed.length;
  const [passage, setPassage] = useState<string>("");
  const [testStarted, setTestStarted] = useState<boolean>(false);
  const [testComplete, setTestComplete] = useState<boolean>(false);

  const { personalBest, testsTaken, updatePersonalBest, updateTestsTaken } =
    usePersonalBest();

  // timer
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // timer start when type
  useEffect(() => {
    if (typed.length === 1 && !isRunning) {
      setIsRunning(true);
    }
  }, [typed, isRunning]);

  // get random passage on difficulty selection
  useEffect(() => {
    const passages = difficulty === "" ? [] : data[difficulty];

    const randomPassage = passages[Math.floor(Math.random() * passages.length)];

    setPassage(randomPassage.text);
  }, [difficulty]);

  // get current passage and typed text and compare for completion.
  // useeffect should only run under these conditions:
  // 1. user completely matches typed and passage
  // 2. users typed word count matches passage word count ONLY AFTER last word character of the passage has been typed.
  useEffect(() => {
    const passageTrim = passage.trim();
    const typedTrim = typed.trim();

    const passageWords = passageTrim.split(/\s+/);
    const typedWords = typedTrim.length ? typedTrim.split(/\s+/) : [];

    const wordCountMatch = typedWords.length === passageWords.length;

    const reachedEnd = typedTrim.length >= passageTrim.length;

    const lastWordCorrect =
      typedWords[typedWords.length - 1] ===
      passageWords[passageWords.length - 1];

    if (wordCountMatch && reachedEnd && lastWordCorrect) {
      setIsRunning(false);
      setTime(60);
      handleComplete();
    }
  }, [typed, passage]);

  useEffect(() => {
    textareaRef.current?.focus();
  }, []);

  useEffect(() => {
    setWpm(calculateWPM());
  }, [typed]);

  useEffect(() => {
    setAccuracy(calculateAccuracy());
  });

  const handleComplete = () => {
    setTestComplete(true);
    updateTestsTaken();
    // check for pb
    if (wpm > personalBest) {
      updatePersonalBest(wpm);
    }
  };

  const calculateWPM = () => {
    const initialTime = 60;
    const timeUsed = initialTime - time;
    const minutes = timeUsed / 60;

    if (minutes === 0) return 0;
    const wpm = Math.round(typed.length / 5 / minutes);
    return wpm;
  };

  const calculateAccuracy = () => {
    if (typed.length === 0) return 100;

    let correct = 0;

    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === passage[i]) {
        correct++;
      }
    }

    const accuracy = (correct / typed.length) * 100;

    return Math.round(accuracy);
  };

  const calculateCharacters = () => {
    let incorrect = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] !== passage[i]) {
        incorrect++;
      }
    }
    return incorrect;
  };

  const handleFocus = () => {
    textareaRef.current?.focus();
  };

  const handleStart = () => {
    setIsRunning(true);
    setTestStarted(true);
    textareaRef.current?.focus();
  };

  const handleReset = (diff: DifficultyType) => {
    if (diff === "") return;
    const passages = data[diff];

    const randomPassage = passages[Math.floor(Math.random() * passages.length)];

    setTestStarted(false);
    setTyped("");
    setAccuracy(100);
    setTime(60);
    setIsRunning(false);
    setPassage(randomPassage.text);
    setTestComplete(false);
    handleFocus();
  };

  return (
    <div className="flex flex-col">
      {!testComplete ? (
        <div className="w-full flex md:justify-between items-left md:items-center flex-col md:flex-row pb-4 border-b border-typing-test-neutral-500">
          <div className="flex stats px-2 mb-4 md:mb-0">
            <div className="flex border-r border-typing-test-neutral-500">
              <h2 className="flex text-typing-test-neutral-500 mr-2">
                WPM:
                <p className="font-bold text-typing-test-neutral-0 ml-1">
                  {String(wpm)}
                </p>
              </h2>
            </div>
            <div className="flex border-r border-typing-test-neutral-500 pl-3 pr-2">
              <h2 className="flex text-typing-test-neutral-500 mr-2">
                Accuracy:
                <p
                  className={`font-bold ml-1 ${accuracy < 100 ? "text-typing-test-red-500" : "text-typing-test-green-500"}`}
                >
                  {String(accuracy)}%
                </p>
              </h2>
            </div>
            <div className="flex pl-3 pr-2">
              <h2 className="flex text-typing-test-neutral-500 mr-2">
                {mode === "passage" ? (
                  "Passage"
                ) : (
                  <>
                    Time:
                    <p className="font-bold ml-1 text-typing-test-yellow-400">
                      0:{String(time)}
                    </p>
                  </>
                )}
              </h2>
            </div>
          </div>
          <div className="options flex">
            <div className="difficulty flex justify-center items-center px-2 border-r border-typing-test-neutral-500">
              <div className="text flex">
                <h2 className="text-typing-test-neutral-400">Difficulty: </h2>
              </div>
              <div className="difficulty-buttons grid grid-cols-3 gap-2 ml-4">
                <button
                  disabled={testStarted}
                  onClick={() => {
                    setDifficulty("easy");
                  }}
                  className={`rounded-xl border px-2 py-1 cursor-pointer hover:border-typing-test-blue-400 hover:text-typing-test-blue-400
              ${difficulty === "easy" ? "border-typing-test-blue-400 text-typing-test-blue-400" : "border-typing-test-neutral-500 text-typing-test-neutral-500"}`}
                >
                  Easy
                </button>
                <button
                  disabled={testStarted}
                  onClick={() => {
                    setDifficulty("medium");
                  }}
                  className={`rounded-xl border px-2 py-1 cursor-pointer hover:border-typing-test-blue-400 hover:text-typing-test-blue-400
              ${difficulty === "medium" ? "border-typing-test-blue-400 text-typing-test-blue-400" : "border-typing-test-neutral-500 text-typing-test-neutral-500"}`}
                >
                  Medium
                </button>
                <button
                  disabled={testStarted}
                  onClick={() => {
                    setDifficulty("hard");
                  }}
                  className={`rounded-xl border px-2 py-1 cursor-pointer hover:border-typing-test-blue-400 hover:text-typing-test-blue-400
              ${difficulty === "hard" ? "border-typing-test-blue-400 text-typing-test-blue-400" : "border-typing-test-neutral-500 text-typing-test-neutral-500"}`}
                >
                  Hard
                </button>
              </div>
            </div>
            <div className="test-type flex justify-center items-center pl-2">
              <div className="text">
                <h2 className="text-typing-test-neutral-400">Mode: </h2>
              </div>
              <div className="mode-buttons flex gap-2 justify-center items-center ml-4">
                <button
                  onClick={() => {
                    setMode("timed");
                  }}
                  className={`rounded-xl border px-2 py-1 cursor-pointer text-nowrap hover:border-typing-test-blue-400 hover:text-typing-test-blue-400
              ${mode === "timed" ? "border-typing-test-blue-400 text-typing-test-blue-400" : "border-typing-test-neutral-500 text-typing-test-neutral-500"}`}
                >
                  Timed (60s)
                </button>
                <button
                  onClick={() => {
                    setMode("passage");
                  }}
                  className={`rounded-xl border px-2 py-1 cursor-pointer hover:border-typing-test-blue-400 hover:text-typing-test-blue-400
              ${mode === "passage" ? "border-typing-test-blue-400 text-typing-test-blue-400" : "border-typing-test-neutral-500 text-typing-test-neutral-500"}`}
                >
                  Passage
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {!testComplete ? (
        // test
        <div className="relative w-full text-[40px] py-10 text-xl leading-relaxed">
          <div className="pointer-events-none whitespace-pre-wrap wrap-break-words">
            {/* split passage into char and record index i */}
            {passage.split("").map((char, i) => {
              // store typedchar
              const typedChar = typed[i];
              // check if index is equal to length of typed
              const isCurrent = i === caretIndex;
              let className = "text-typing-test-neutral-400";
              let displayChar = char;

              if (typedChar) {
                if (typedChar === char) {
                  className = "text-green-500";
                  displayChar = char;
                } else {
                  className =
                    "text-red-500 underline decoration-2 underline-offset-10";
                  displayChar = typedChar;
                }
              }

              // next character
              if (isCurrent) {
                className += " bg-typing-test-neutral-800/95 rounded-lg";
              }

              return (
                <span key={i} className={className}>
                  {displayChar}
                </span>
              );
            })}
          </div>
          <textarea
            ref={textareaRef}
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            spellCheck={false}
            className="
          absolute inset-0 w-full h-full resize-none
          text-transparent
          outline-none
        "
          />
          {!isRunning && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60">
              <button
                onClick={handleStart}
                className="px-6 py-4 bg-typing-test-blue-600 text-typing-test-neutral-0 font-semibold rounded-lg cursor-pointer text-xl mb-5"
              >
                Start Typing Test
              </button>
              <h1 className="text-xl font-semibold">
                Or click the text and start typing
              </h1>
            </div>
          )}
        </div>
      ) : (
        // results
        <div className="w-full flex flex-col justify-center items-center gap-8 py-8">
          <div className="success w-1/2 flex justify-center items-center">
            {wpm > personalBest ? (
              <Image
                src={"/typing-test/icon-new-pb.svg"}
                width={64}
                height={64}
                alt="completed-icon"
              />
            ) : (
              <Image
                src={"/typing-test/icon-completed.svg"}
                width={64}
                height={64}
                alt="completed-icon"
              />
            )}
          </div>
          <div className="text flex flex-col justify-center items-center">
            {wpm > personalBest ? (
              <>
                <h1 className="font-bold text-[40px]">High Score Smashed!</h1>
                <p className="text-typing-test-neutral-500">
                  You're getting faster. That was incredible typing.
                </p>
              </>
            ) : (
              <>
                {testsTaken > 1 ? (
                  <>
                    {" "}
                    <h1 className="font-bold text-[40px]">Test Complete!</h1>
                    <p className="text-typing-test-neutral-500">
                      Solid run. Keep pushing to beat your high score.
                    </p>
                  </>
                ) : (
                  <>
                    {" "}
                    <h1 className="font-bold text-[40px]">
                      Baseline Established!
                    </h1>
                    <p className="text-typing-test-neutral-500">
                      You've set the bar. Now the real challenge begins—time to
                      beat it.
                    </p>
                  </>
                )}
              </>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-2 md:w-auto">
            <div className="stats flex flex-col px-6 py-4 border border-typing-test-neutral-500 rounded-lg">
              <h1>WPM:</h1>
              <p className="font-bold text-2xl">{wpm}</p>
            </div>
            <div className="stats flex flex-col px-6 py-4 border border-typing-test-neutral-500 rounded-lg">
              <h1>Accuracy:</h1>
              <p
                className={`font-bold text-2xl ${accuracy < 100 ? "text-typing-test-red-500" : "text-typing-test-green-500"}`}
              >
                {accuracy}%
              </p>
            </div>
            <div className="stats flex flex-col px-6 py-4 border border-typing-test-neutral-500 rounded-lg">
              <h1>Characters:</h1>
              <p className="font-bold text-2xl">
                <span className="text-typing-test-green-500">
                  {passage.length}
                </span>
                /
                <span className="text-typing-test-red-500">
                  {calculateCharacters()}
                </span>
              </p>
            </div>
          </div>
          <Confetti tweenDuration={5} />
        </div>
      )}
      {testStarted ? (
        <div className="py-8 border-t border-typing-test-neutral-500 w-full flex items-center justify-center">
          <button
            className="cursor-pointer font-semibold text-[20px] rounded-lg bg-typing-test-neutral-800 hover:bg-typing-test-neutral-800/70 px-4 py-2.5 flex gap-2"
            onClick={() => handleReset(difficulty)}
          >
            <p>Restart</p>
            <Image
              src={"/typing-test/icon-restart.svg"}
              width={20}
              height={20}
              alt="Restart Icon"
            />
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Test;

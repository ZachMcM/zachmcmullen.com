"use client"

import Typewriter from "typewriter-effect";

export function TypewriterWrapper() {
  return (
    <div className="font-bold text-3xl">
      <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello World!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .typeString("Hola Mundo!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .typeString("Bonjour le monde!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .typeString("Hallo Welt!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .typeString("Ciao mondo!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .typeString("こんにちは世界!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .typeString("你好 世界!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log("All strings were deleted");
          })
          .start();
      }}
    />
    </div>
  );
}

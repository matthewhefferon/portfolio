import Link from "next/link";
import Confetti from "react-confetti";

export default function ConnectButton({ showConfetti, setShowConfetti, windowDimensions }) {
  return (
    <>
      <section className="py-10 flex justify-center">
        <Link
          href="https://www.linkedin.com/in/matthewhefferon/"
          passHref={true}
        >
          <div
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 border-none rounded-md hover:brightness-95 text-xl"
            onMouseEnter={() => setShowConfetti(true)}
            onMouseLeave={() => setShowConfetti(false)}
          >
            Let's Connect!
          </div>
        </Link>
      </section>
      {showConfetti && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <Confetti
            width={windowDimensions.width}
            height={windowDimensions.height}
            recycle={false}
            numberOfPieces={200}
          />
        </div>
      )}
    </>
  );
} 
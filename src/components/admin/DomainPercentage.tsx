import { Carousel } from "flowbite-react";
import gif from "../media/bg-tube.json";
import Lottie from "lottie-react";

const DomainPercentage = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel leftControl="" rightControl="">
        <div>
          <div className="h-[100%] w-[100%] opacity-75 -z-10 relative top-24 scale-75">
            <Lottie animationData={gif} />
          </div>
          <svg
            width="200"
            height="200"
            className="relative left-[180px] bottom-60"
          >
            <g transform="rotate(-90 100 100)">
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lavender"
                stroke-width="1rem"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="red"
                stroke-width="1.5rem"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              86%
            </text>
          </svg>
          <h1 className="relative bottom-56 text-center font-mono text-[30px] tracking-[3px] text-gray-800 font-bold underline-offset-8 underline">
            {" "}
            Frontend Team{" "}
          </h1>
        </div>
        <div>
          <div className="h-[100%] w-[100%] opacity-75 -z-10 relative top-24 scale-75">
            <Lottie animationData={gif} />
          </div>
          <svg
            width="200"
            height="200"
            className="relative left-[180px] bottom-60"
          >
            <g transform="rotate(-90 100 100)">
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lavender"
                stroke-width="1rem"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="blue"
                stroke-width="1.5rem"
                stroke-dasharray="439.8"
                stroke-dashoffset="150"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              66%
            </text>
          </svg>
          <h1 className="relative bottom-56 text-center font-mono text-[30px] tracking-[3px] text-gray-800 font-bold underline-offset-8 underline">
            {" "}
            Backend Team{" "}
          </h1>
        </div>
        <div>
          <div className="h-[100%] w-[100%] opacity-75 -z-10 relative top-24 scale-75">
            <Lottie animationData={gif} />
          </div>
          <svg
            width="200"
            height="200"
            className="relative left-[180px] bottom-60"
          >
            <g transform="rotate(-90 100 100)">
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lavender"
                stroke-width="1rem"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="green"
                stroke-width="1.5rem"
                stroke-dasharray="439.8"
                stroke-dashoffset="270"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              40%
            </text>
          </svg>
          <h1 className="relative bottom-56 text-center font-mono text-[30px] tracking-[3px] text-gray-800 font-bold underline-offset-8 underline">
            {" "}
            FullStack Team{" "}
          </h1>
        </div>
        <div>
          <div className="h-[100%] w-[100%] opacity-75 -z-10 relative top-24 scale-75">
            <Lottie animationData={gif} />
          </div>
          <svg
            width="200"
            height="200"
            className="relative left-[180px] bottom-60"
          >
            <g transform="rotate(-90 100 100)">
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="lavender"
                stroke-width="1rem"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
              ></circle>
              <circle
                r="70"
                cx="100"
                cy="100"
                fill="transparent"
                stroke="orange"
                stroke-width="1.5rem"
                stroke-dasharray="439.8"
                stroke-dashoffset="90"
              ></circle>
            </g>
            <text
              x="50%"
              y="50%"
              dominant-baseline="central"
              text-anchor="middle"
            >
              78%
            </text>
          </svg>
          <h1 className="relative bottom-56 text-center font-mono text-[30px] tracking-[3px] text-gray-800 font-bold underline-offset-8 underline">
            {" "}
            Tester{" "}
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default DomainPercentage;

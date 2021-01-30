import { useStore } from "./utils";

export const useDecipherCodeLogo = () => {
  const { styles } = useStore();

  return (
    <main className={styles.DecipherCodeLogo}>
      <svg
        viewBox="0 0 988 150"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <filter id="a" height="125.6%" width="103.3%" x="-1.7%" y="-12.8%">
          <feOffset
            dx={-2}
            dy={4}
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation={2}
          />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <g
          fill="none"
          fillRule="evenodd"
          filter="url(#a)"
          transform="translate(12.960494 12.056167)"
        >
          <path
            d="m756.724155 34.5120105 67.410833 3.0635823 2.219869 71.8000632-68.435357-5.059841z"
            fill="#f8b912"
            transform="matrix(.77714596 .62932039 -.62932039 .77714596 221.673497 -482.098978)"
          />
          <path
            d="m254.039506 22.9438332 28 1-1 96.9999998-25.425896 2z"
            fill="#59b8dd"
          />
          <path
            d="m286.039506 21.9438332 87 18.8612537-45.405364 49.186099-2.594636 33.9526471-30.5.5zm30 23-1 21 21-13z"
            fill="#fb6e56"
          />
          <path
            d="m47.0385572 13 52.0846937 75.1232577-83.1232509 21.2887383z"
            fill="#fb6e56"
            transform="matrix(.92050485 -.39073113 .39073113 .92050485 -19.339219 27.356698)"
          />
          <path
            d="m102.539506 26.4438332 53 1v7.427564l-32.615393 5.8523607-.444299 13.6515616 32.559692.5685137 1 10-34.64995 8.8321291-1.992718 9.1969064 36.142668 1.9388766.5 31.0320877-59.9999999 3z"
            fill="#f8b912"
          />
          <path
            d="m853.038557 13 52.084694 75.1232577-83.123251 21.2887383z"
            fill="#8ac33b"
            transform="matrix(.92050485 -.39073113 .39073113 .92050485 44.733869 342.285988)"
          />
          <path
            d="m908.539506 26.4438332 53 1v7.427564l-32.615393 5.8523607-.444299 13.6515616 32.559692.5685137 1 10-34.64995 8.8321291-1.992718 9.1969064 36.142668 1.9388766.5 31.0320877-60 3z"
            fill="#59b8dd"
          />
          <path
            d="m368.539506 29.4438332v92.0449818l24.142003 2.197026.357997-53.7420078 18 1 4.870682 51.9999998 26.668923-1.455018-8.219376-99.2949818-18.865691-.25-2.771455 31.5685415-21.270116-2.9674388-3.412967-21.6011027z"
            fill="#f8b912"
          />
          <path
            d="m452.539506 26.4438332 53 1v7.427564l-32.615393 5.8523607-.444299 13.6515616 32.559692.5685137 1 10-34.64995 8.8321291-1.992718 9.1969064 36.142668 1.9388766.5 31.0320877-60 3z"
            fill="#8ac33b"
          />
          <path
            d="m510.539506 22.4438332 81.86 19.5-32.36 26 32.36 27.3046067-2.540492 23.6953931-39.929623-27.8582986-1.889885 28.8582986-30.5 1.5zm30.605781 17.5v16.5555556l15.894219-8.5555556z"
            fill="#59b8dd"
          />
          <path
            d="m193.539506 20.4438332 49.5 21.5-52 35 60 17-38 29.9999998-55-46.9999998z"
            fill="#8ac33b"
          />
          <path
            d="m690.539506 20.4438332 49.5 21.5-52 35 60 17-38 29.9999998-55-46.9999998z"
            fill="#fb6e56"
          />
        </g>
      </svg>
    </main>
  );
};

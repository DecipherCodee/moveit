import { useStore } from "./utils";

export const useDollarIcon = ({ onClick }) => {
  const { styles } = useStore();

  return (
    <main className={`${styles.svg} pricing`}>
      <svg
        onClick={onClick}
        viewBox="0 0 134 274"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <filter id="a" height="117.5%" width="142%" x="-21%" y="-8.8%">
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
        <g filter="url(#a)" strokeWidth={10} transform="translate(17 17)">
          <path d="m0 80c0 27.57 22.43 50 50 50 16.542 0 30 13.458 30 30s-13.458 30-30 30-30-13.458-30-30c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 24.146 17.205 44.348 40 48.994v21.006c0 5.523 4.478 10 10 10s10-4.477 10-10v-21.006c22.795-4.646 40-24.847 40-48.994 0-27.57-22.43-50-50-50-16.542 0-30-13.458-30-30s13.458-30 30-30 30 13.458 30 30c0 5.523 4.478 10 10 10s10-4.477 10-10c0-24.146-17.205-44.348-40-48.994v-21.006c0-5.523-4.478-10-10-10s-10 4.477-10 10v21.006c-22.795 4.646-40 24.848-40 48.994z" />
        </g>
      </svg>
    </main>
  );
};

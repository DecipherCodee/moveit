import { useStore } from "./utils";

export const useSearch = () => {
  const { styles } = useStore();

  return (
    <svg
      className={styles.search}
      viewBox="0 0 240 241"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <filter id="a" height="129%" width="129.2%" x="-15.6%" y="-13.5%">
        <feOffset dx={-2} dy={4} in="SourceAlpha" result="shadowOffsetOuter1" />
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
        transform="translate(26 22)"
      >
        <path
          d="m44.1715729 14.3180195c2.7614237 0 5.2614237 1.1192881 7.0710678 2.9289322 1.809644 1.809644 2.9289322 4.309644 2.9289322 7.0710678v52c0 5.2467051-2.1266475 9.9967051-5.5649712 13.4350288s-8.1883237 5.5649712-13.4350288 5.5649712-9.9967051-2.1266475-13.4350289-5.5649712c-3.4383237-3.4383237-5.5649711-8.1883237-5.5649711-13.4350288v-52c0-2.7614238 1.1192881-5.2614238 2.9289322-7.0710678 1.809644-1.8096441 4.309644-2.9289322 7.0710678-2.9289322z"
          strokeLinejoin="round"
          strokeWidth={10}
          transform="matrix(.70710678 .70710678 -.70710678 .70710678 49.063708 94.185768)"
        />
        <path
          d="m58.646447 8h28v18h-28z"
          className={styles.handle}
          transform="matrix(.70710678 .70710678 -.70710678 .70710678 33.298467 56.610389)"
        />
        <g transform="translate(60.646447)">
          <circle cx="65.5" cy="65.5" r="70.5" strokeWidth={10} />
          <path
            d="m18.3668438 40.1656893c-4.0618911 7.5410768-6.3668438 16.1685185-6.3668438 25.3343107 0 29.5472341 23.9527659 53.5 53.5 53.5s53.5-23.9527659 53.5-53.5-23.9527659-53.5-53.5-53.5c-9.7647651 0-18.9185196 2.6160474-26.7986393 7.1855179"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={5}
          />
          <circle cx="65.5" cy="65.5" r="57.5" />
          <path
            d="m29.7622939 26.8759738c-.0192496-.0247469-.0412492-.0467442-.0659988-.0714912-1.0755052-1.0726435-2.8164983-1.0726435-3.8917286 0-1.0727553 1.0753931-1.0727553 2.8162047 0 3.8913229.0247495.0247469.0467491.0467442.0714987.0687415 1.0810052 1.0039019 2.7697492.979155 3.8202299-.0687415 1.0477308-1.0506462 1.0724804-2.7392142.0659988-3.8198317z"
            fillRule="nonzero"
            strokeWidth={3}
          />
        </g>
      </g>
    </svg>
  );
};

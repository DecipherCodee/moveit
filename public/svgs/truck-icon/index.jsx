import { useStore } from "./utils";

export const useTruckIcon = () => {
  const { styles } = useStore();

  return (
    <main className={`${styles.svg} collection`}>
      <svg
        viewBox="0 0 215 137"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <filter id="a" height="137.6%" width="119.7%" x="-9.5%" y="-17.6%">
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
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <g fillRule="evenodd" filter="url(#a)" transform="translate(13.6 15)">
          <path
            d="m25.4276977 88h-23.38182614c-.57761891 0-1.04587156-.4758326-1.04587156-1.0628019v-85.87439617c0-.5869693.46825265-1.06280193 1.04587156-1.06280193h111.90825644c.577619 0 1.045872.47583263 1.045872 1.06280193v86.93719807h-61.2117652"
            strokeWidth={5}
          />
          <path
            d="m66.2388179 14.4875734c-1.3902433-1.0128105-3.162175-.3967457-3.9572627 1.3755494-.7947009 1.772788-.3116929 4.0305422 1.0793238 5.0433526l12.2171252 8.8974539h-57.2776358c-1.6017768 0-2.9003684 1.6549964-2.9003684 3.6963886s1.2985916 3.6958958 2.9003684 3.6958958h57.2776358l-12.2171252 8.8974538c-1.39063 1.0128105-1.8740247 3.2705647-1.0793238 5.0433526.5352147 1.1936871 1.5139923 1.8629799 2.5210003 1.8629799.4880353 0 .9826448-.1572197 1.4362624-.4879233l21.6997831-15.8028006c.9033681-.6579572 1.461399-1.882694 1.461399-3.2094511 0-1.326757-.5576442-2.551001-1.461399-3.209451z"
            className={styles.arrow}
          />
          <path
            d="m145.472636 87.8767109-29.963039.1232891m30.797366.2519791-30.797366.2715721v-40l46.386589-3.0235512 22.394609 8.3705855c.821492.2693141 1.376956 1.0359671 1.376956 1.900478v20.8878733c0 .2309679-.040007.4601903-.118248.6775024l-1.536998 4.2689861c-.148311.4119323-.427695.763818-.795278 1.0016568l-8.334827 5.3929179"
            strokeWidth={5}
          />
          <g strokeWidth={5} transform="translate(115.4 11.5)">
            <path
              d="m0 0h31.2447607c2.4476303 0 4.6498895 1.48675042 5.5649356 3.75690131l12.1903037 30.24309869h-49z"
              strokeLinejoin="round"
            />
            <g strokeLinecap="square">
              <path d="m4.5 12h34" />
              <path
                d="m26.5 14 6 17"
                transform="matrix(.9998477 -.01745241 .01745241 .9998477 -.388186 .518273)"
              />
            </g>
          </g>
          <g transform="translate(148.4 80)">
            <circle cx="12.22" cy="12.22" r="14.72" strokeWidth={5} />
            <circle cx={12} cy={12} className={styles.wheel} r={6} />
          </g>
          <g transform="translate(27.4 80)">
            <circle cx="12.22" cy="12.22" r="14.72" strokeWidth={5} />
            <circle cx={12} cy={12} className={styles.wheel} r={6} />
          </g>
          <g strokeLinecap="round" strokeWidth={5}>
            <path d="m.9 66.5h169" strokeLinejoin="round" />
            <path d="m181.9 66.5h3.767751" />
          </g>
        </g>
      </svg>
    </main>
  );
};

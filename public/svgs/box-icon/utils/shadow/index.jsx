import { useStore } from "./utils";

export const useShadow = () => {
  const { styles } = useStore();

  return (
    <main className={styles.shadow}>
      <svg
        viewBox="0 0 522 551"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <filter id="a" height="101.1%" width="101.1%" x="-.6%" y="-.5%">
          <feMorphology
            in="SourceAlpha"
            operator="erode"
            radius={2}
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
            stdDeviation="1.5"
          />
          <feOffset
            dx={0}
            dy={1}
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2={-1}
            k3={1}
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
        </filter>
        <filter id="b" height="117.6%" width="111.1%" x="-5.6%" y="-8.8%">
          <feMorphology
            in="SourceAlpha"
            operator="erode"
            radius={2}
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
            stdDeviation="1.5"
          />
          <feOffset
            dx={0}
            dy={1}
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2={-1}
            k3={1}
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
        </filter>
        <filter id="c" height="112%" width="106.9%" x="-3.4%" y="-6%">
          <feMorphology
            in="SourceAlpha"
            operator="erode"
            radius={2}
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
            stdDeviation="1.5"
          />
          <feOffset
            dx={0}
            dy={1}
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            k2={-1}
            k3={1}
            operator="arithmetic"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            in="shadowInnerInner1"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
        </filter>
        <path
          d="m517.389473 121.576632-252.842663-120.77434665c-2.241636-1.0697138-4.851984-1.0697138-7.092533 0l-252.84374976 120.77434665c-2.81917589 1.34629-4.61052724 4.171238-4.61052724 7.268458v293.309282c0 3.09722 1.79135135 5.922168 4.61052724 7.268458l252.84266276 120.774347c1.120274.534856 2.334086.802823 3.54681.802823s2.425448-.267967 3.54681-.802823l252.842663-120.774347c2.819176-1.34629 4.610527-4.171238 4.610527-7.268458v-293.308206c0-3.099372-1.792439-5.922168-4.610527-7.269534zm-256.389473-104.5424621 234.079698 111.8109201-67.85491 32.412113c-.429619-.323928-.883167-.623103-1.381309-.860937l-232.489561-111.0500671zm-86.068613 41.4379576 233.739265 111.6484185-47.872696 22.867554-233.642464-111.6032195zm239.207944 126.9601765v84.528914l-44.71635 21.359838v-84.528913zm91.545994 231.657608-236.527987 112.978565v-275.383504l56.41941-26.94947c4.056916-1.938183 5.757992-6.762657 3.799144-10.777851-1.958849-4.013041-6.834762-5.698324-10.892765-3.759064l-57.483127 27.458498-22.618666-10.804755c-4.058003-1.940336-8.933916-.255052-10.892765 3.759065-1.958848 4.014117-.257772 8.839667 3.799144 10.777851l21.554949 10.295726v275.383504l-236.5279867-112.980717v-275.383505l180.1140147 86.034477c1.143115.546694 2.351489.804975 3.540285.804975 3.032354 0 5.945068-1.680978 7.351393-4.56404 1.958848-4.014117.257772-8.839667-3.799144-10.777851l-176.6009221-84.356726 81.0349921-38.7077122 245.039897 117.0475672c.035892.049504.076135.093627.113115.142055v96.854298c0 2.777597 1.443305 5.35933 3.820897 6.836913 1.320401.820042 2.826789 1.234368 4.337528 1.234368 1.209462 0 2.422186-.265814 3.545723-.802824l61.031025-29.152391c2.819176-1.34629 4.610527-4.170162 4.610527-7.268458v-97.388079l75.231319-35.935496z"
          filter="url(#a)"
        />
        <path
          d="m84.3381763 385.599671-37.5057183-17.790967c-4.1029266-1.947727-9.0303963-.256024-11.0103992 3.773383s-.2605556 8.873338 3.8401722 10.818904l37.5057183 17.790967c1.1554597.548777 2.376883.808042 3.5785171.808042 3.0651017 0 6.0092703-1.687382 7.4307827-4.581425 1.9811023-4.030488.261655-8.872258-3.8390728-10.818904z"
          filter="url(#b)"
        />
        <path
          d="m117.415009 363.705651-70.7792609-33.903529c-4.0338719-1.932042-8.8807889-.254244-10.8279889 3.748226-1.9461188 4.001398-.2551578 8.811656 3.7776329 10.743698l70.7792609 33.903529c1.136317.54389 2.337505.802425 3.519231.802425 3.014322 0 5.909714-1.675652 7.307676-4.549578 1.9472-4.003543.256239-8.813802-3.776551-10.744771z"
          filter="url(#c)"
        />
      </svg>

      <p>No item stored!</p>
    </main>
  );
};

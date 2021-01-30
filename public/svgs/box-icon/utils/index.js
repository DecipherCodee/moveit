import styles from "./style.module.scss";

function useStyles({ size }) {
  return {
    ...styles,
    extra: {
      height: `${size}`,
      width: `${size}`,
    },
  };
}

export const useStore = ({ size }) => ({
  styles: useStyles({ size }),
});

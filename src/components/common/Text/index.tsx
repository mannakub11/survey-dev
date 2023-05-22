import { Typography } from "@mui/material";
import { TextProps } from "./type";
const Text = (props: TextProps) => {
  const {
    children,
    className,
    color = "black",
    lineHeight = "24px",
    size = "16px",
    weight = 400,
    type = "Regular",
  } = props;
  return (
    <Typography
      className={className}
      color={color}
      fontWeight={weight}
      lineHeight={lineHeight}
      fontSize={size}
      fontFamily={["-apple-system", `KrungthaiFast-${type}`].join(",")}
    >
      {children}
    </Typography>
  );
};
export default Text;

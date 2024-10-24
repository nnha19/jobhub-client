import { Typography, TypographyProps } from "@mui/material";

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }

  return text;
};

interface IProps extends TypographyProps {
  text: string;
  wordLimit: number;
}

const TruncatedTypography = ({
  text,
  wordLimit,
  sx,
  ...typographyProps
}: IProps) => {
  const truncatedText = truncateText(text, wordLimit);

  return (
    <Typography
      variant="body1"
      sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        ...sx,
      }}
      {...typographyProps}
    >
      {truncatedText}
    </Typography>
  );
};

export default TruncatedTypography;

import { Typography, TypographyProps } from "@mui/material";
import sanitizeHtml from "sanitize-html";

interface IProps extends TypographyProps {
  html: string;
}

const SanitizedHTML = ({ html, ...typographyProps }: IProps) => {
  return (
    <Typography
      {...typographyProps}
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
    />
  );
};

export default SanitizedHTML;

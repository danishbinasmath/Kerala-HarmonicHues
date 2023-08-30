import { Typography, useTheme } from "@mui/material";
import WidgetWrapper from "components/KeralaCommunity/WidgetWrapper";
import keralaLogo from "../../components/images/Kerala.jpeg"

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <Typography color={dark} variant="h5" fontWeight="500">
        Kerala Community
      </Typography>
      <img
        width="100%"
        height="auto"
        alt="keralaLogo"
        src={keralaLogo}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <Typography color={medium} m="0.5rem 0">
        Welcome to Kerala community page, here you can post about things related to kerala and also like posts and also you can add friends.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";


const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="10%" m="0 100px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h2"
            fontWeight="bold"
            textAlign='center'
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          
          <Typography variant="h4" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;

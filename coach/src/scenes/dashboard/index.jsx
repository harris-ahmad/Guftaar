import { Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupIcon from '@mui/icons-material/Group';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import CallIcon from '@mui/icons-material/Call';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Welcome, Emaan" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            // title="Upcoming Meetings"
            icon={
              <CallIcon
                sx={{color: colors.greenAccent[600], fontSize: "60px", position:'absolute', left: "27%", top: "25%"}}
              />
            }
          />
        </Box>
      

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            // title="Your Clients"
            icon={
              <AccountCircleRoundedIcon
                sx={{color: colors.greenAccent[600], fontSize: "60px", position:'absolute', left: "47%", top: "25%"}}
              />
            }
          />
        
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            // title="Your Clients"
            icon={
              <CalendarMonthRoundedIcon
                sx={{color: colors.greenAccent[600], fontSize: "60px", position:'absolute', left: "66%", top: "25%"}}
              />
            }
          />
          
        </Box>       
      </Box>
    </Box>
  );
};

export default Dashboard;

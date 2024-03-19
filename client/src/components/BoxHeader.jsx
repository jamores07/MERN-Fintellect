import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import PropTypes from 'prop-types'

const BoxHeader = ({ title, sideText, subtitle, icon }) => { // Added icon as prop
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon} 
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title} 
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText} 
      </Typography>
    </FlexBetween>
  );
}

BoxHeader.propTypes = {
  title: PropTypes.node, // Allow JSX elements
  sideText: PropTypes.node,
  subtitle: PropTypes.node,
  icon: PropTypes.node
}

export default BoxHeader
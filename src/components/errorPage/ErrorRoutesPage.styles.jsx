import { Box, styled } from '@mui/material';
import ReplyIcon from '@mui/icons-material/Reply';

export const ErrorBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  height: '100vh',
});

export const BackBtn = styled(ReplyIcon)({
  fontSize: '30px',
});

export const BtnContainer = styled(Box)({
  width: 'fit-content',
  marginTop: '32px',
});

export const LinkBtnStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  border: '1px solid grey',
  borderRadius: '20px',
  backgroundColor: 'grey',
  textDecoration: 'none',
  color: 'black',
  fontSize: '30px',
  padding: '10px',
  opacity: '0.8',
};

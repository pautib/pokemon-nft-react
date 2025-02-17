import PropTypes from "prop-types";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

/**
 * My PopupWindow that can be generalized. Style can be injected with more properties for deeper customization
 * The popup will be open on a specific flag passed by parameter
 * 
 * @param {} 
 * @returns 
 */
export const PopupWindow = ({ open, onClose = () => {}, title = "", children }) => { // https://mui.com/toolpad/core/react-use-dialogs/#api
  return (
    <Dialog fullWidth open={open} onClose={() => onClose()}>
      <DialogTitle> { title } </DialogTitle>
      <DialogContent>
        { children }
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()}>Close me</Button>
      </DialogActions>
    </Dialog>
  );
}

PopupWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};
import PropTypes from "prop-types";
import { Dialog } from '@mui/material';
import { styled } from '@mui/system';

/**
 * My PopupWindow that can be generalized. Style can be injected with more properties for deeper customization
 * The popup will be open on a specific flag passed by parameter
 * 
 * @param {} 
 * @returns 
 */
export const PopupWindow = ({ open, onClose = () => {}, children, title = "", style }) => { // https://mui.com/toolpad/core/react-use-dialogs/#api

  style.buttonClassName ??= '';
  style.buttonId ??= 'button-window';

  return (
    <Dialog fullWidth open={open} style={{ alignItems: 'flex-start', overflowY: 'hidden' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center' }}>
        <WindowTitle> { title } </WindowTitle>
        <WindowButton type="button" aria-describedby={ style.buttonId } onClick={ onClose } className={ style.buttonClassName }>
          X
        </WindowButton>
      </div>
      <WindowContent>
        { children }
      </WindowContent>
    </Dialog>
  );
}

PopupWindow.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  style: PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.node
};


const WindowContent = styled('div')(
  () => `
  width: 100%;
  padding: 2% 2%;
  margin: 2%;
  justify-content: center;
  font-family: 'IBM Plex Sans', sans-serif;
  display: inherit;
`,
);

const WindowTitle = styled('div')(
  () => `
  width: 100%;
  font-size: 130%;
  margin: 2%;
  justify-content: center;
  font-family: 'IBM Plex Sans', sans-serif;
  display: inherit;
`,
);

const WindowButton = styled('button')(
  () => `
  width: 8%;
  align-self: end;
  transition: all 150ms ease;
  cursor: pointer;
  display: inherit;
`,
);
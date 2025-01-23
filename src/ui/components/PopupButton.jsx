import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { useFloating, shift, offset, flip } from "@floating-ui/react-dom";
import { useState } from 'react';
import PropTypes from "prop-types";
import { styled } from '@mui/system';

/**
 * My PopUpButton that can be generalized. Style can be injected with more properties for deeper customization
 * 
 * @param {} 
 * @returns 
 */
export const PopupButton = ({buttonTitle, children, style}) => {
  const [anchor, setAnchor] = useState(null);
  const { x, y, reference, floating} = useFloating({
    placement: "right",
    middleware: [offset(1), flip(), shift({ padding: 1 })],
  });

  const handleClick = (event) => {
    setAnchor(anchor ? null : event.currentTarget);
  };

  const open = Boolean(anchor);
  const id = open ? 'wallet-popper' : undefined;

  style.buttonClassName ??= '';

  return (
    <div className="flex-container">
        <Button aria-describedby={id} type="button" ref={reference} onClick={handleClick} className={style.buttonClassName + `${open ? " active" : ""}` }>
            { buttonTitle }
        </Button>
        <BasePopup id={id} open={open} anchor={anchor} ref={floating} style={{ top: y, left: x}}>
            <PopupBody> { children } </PopupBody>
        </BasePopup>
    </div>
  );
}

PopupButton.propTypes = {
    buttonTitle: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};


const PopupBody = styled('div')(
  ({ theme }) => `
  width: 100%;
  padding: 12px 16px;
  margin: 8px;
  border-radius: 8px;
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  box-shadow: ${
    theme.palette.mode === 'dark'
      ? `0px 4px 8px rgb(0 0 0 / 0.7)`
      : `0px 4px 8px rgb(0 0 0 / 0.1)`
  };
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  z-index: 1;
`,
);

const Button = styled('button')(
  () => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;
`,
);
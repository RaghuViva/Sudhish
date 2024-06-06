import React, { LegacyRef } from "react";
import './index.css';
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react";
import menuIcon from '../../Assets/images/bars-svgrepo-com.svg';

const DrawerCmp = (prop: any) => {
  const { children, } = prop;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef<any>(null);
  
    return (
      <>
        <div className="DrawerCmp-contaier-1">
          {
            children
          }
        </div>
        <div className="DrawerCmp-contaier-2">
          <button ref={btnRef} onClick={onOpen}>
            <img src={menuIcon} alt="=" style={{width:"50px",}} />
          </button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <div onClick={onClose}>
                  {
                    children
                  }
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </>
    )
  }

export default DrawerCmp;
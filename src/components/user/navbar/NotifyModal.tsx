import { Modal } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Badge } from "@mui/material";
import BasicTabs from "./BasicTabs";

const NotifyModal = ({ prop }: { prop: number }) => {
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [notifier, setNotifier] = useState<number>(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setNotifier(prop);
    {
      flag ? setNotifier(0) : notifier;
    }
  }, [prop, notifier, flag]);

  const notifyOpener = () => {
    setFlag(true);
    setOpenModal(true);
  };

  return (
    <>
      <Badge color="secondary" badgeContent={notifier}>
        <button onClick={notifyOpener}>
          <NotificationsNoneIcon className="notify-bell" />
        </button>
      </Badge>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        initialFocus={emailInputRef}
      >
        <Modal.Header> Notifications </Modal.Header>
        <Modal.Body>
          <div>
            <section className="w-[94%] h-[500px] border-2 border-gray-300 shadow-md rounded-lg bg-[#ffff001e] relative left-3">
              <div className="h-[1px] w-[100%] bg-[#80808054] relative top-1"></div>
              <section className="h-[100%] overflow-y-auto">
                <BasicTabs />
              </section>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NotifyModal;

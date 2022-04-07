import CreateEvent from "../../components/CreateEvent";
import NavigationBar from "../../components/NavigationBar";
import { getCookie } from "cookies-next";
import useApplicationData from "../../hooks/useApplicationData";

const NewEvent = (props) => {
  const { state, createEvent } = useApplicationData();
  return (
    <>
      <CreateEvent
        state={state}
        createEvent={createEvent}
        user_id={getCookie("user_id")}
      ></CreateEvent>

      <NavigationBar />
    </>
  );
};

export default NewEvent;

import "./App.css";
import FormInput from "./compoments/FormInput";
import ListReminders from "./compoments/ListReminders";
import remindStore from "./layouts/RemindStore";
function App() {
  return (
    <div className="app">
      <div className="appMain">
        <h1 className="heading">NHẮC NHỞ NGÀY QUAN TRỌNG</h1>
        <div>
          <h5 className="heading-remind">{remindStore.popupRemind()}</h5>
        </div>
        <div className="container">
          <div className="row">
            <FormInput />
            <ListReminders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

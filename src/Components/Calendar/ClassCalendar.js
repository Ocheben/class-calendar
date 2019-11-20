import React, { useState } from 'react';
import { connect } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import * as dateFns from 'date-fns';
import Cells from '../Cells/Cells';
import Header from '../Header/Header';
import Days from '../Days/Days';
import FullScreenDialog from '../ClassDialog/ClassDialog';
import ClassModal from '../Modal/ClassModal';
import { classList } from './mockData';

const Calendar = (props) => {
  const { location } = props;
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date(),
    modalOpen: false,
    formInputs: {
      time: new Date()
    },
    isEdit: false
  });
  const [openAdd, setOpenAdd] = useState(false);

  const nextMonth = () => {
    setState({
      ...state,
      currentMonth: dateFns.addMonths(state.currentMonth, 1)
    });
  };

  const prevMonth = () => {
    setState({
      ...state,
      currentMonth: dateFns.subMonths(state.currentMonth, 1)
    });
  };

  const openModal = (modalState, formInputs, isEdit) => {
    setState({
      ...state,
      modalOpen: modalState,
      formInputs,
      isEdit
    });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="root">
        <div className="calendar">
          <Header
            location={location}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            openModal={openModal}
            openAdd={() => setOpenAdd(true)}
            currentMonth={state.currentMonth}
          />
          <Days currentMonth={state.currentMonth} />
          <Cells
            currentMonth={state.currentMonth}
            selectedDate={state.selectedDate}
            reminders={classList}
            openModal={openModal}
          />
        </div>
        <ClassModal isOpen={openAdd} handleClose={() => setOpenAdd(false)} />
        <FullScreenDialog isOpen={state.modalOpen} openModal={openModal} />
      </div>
    </MuiPickersUtilsProvider>
  );
};

const mapStateToProps = state => ({
  reminders: state.reminders
});

export default connect(mapStateToProps)(Calendar);

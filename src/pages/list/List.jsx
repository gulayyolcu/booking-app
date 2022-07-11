import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {format} from "date-fns"
import {DateRange} from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location=useLocation()

  const [destination,setDestination]=useState(location.state.destination)
  const [date,setDate]= useState(location.state.date)
  const [options,setOptions]= useState(location.state.options)

  const [openDate,setOpenDate]=useState(false)

  return (
    <div>
        <Navbar/>
        <Header type="list"/>
        <div className="listContainer">
            <div className="listWrapper">
                <div className="listSearch">
                    <h1 className="lsTitle">Search</h1>
                    <div className="lsItem">
                        <label>Destination</label>
                        <input type="text" onChange={(e)=>setDestination(e.target.value)} placeholder={destination} />
                    </div>
                    <div className="lsItem">
                        <label>Check-in Date</label>
                        <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                        />}
                    </div>

                    <div className="lsItem">
                        <label>Options</label>
                        <div className="lsOptions">
                        <div className="lsOptionItem">
                            <span className="lsOptionText">Min Price <small>per night</small></span>
                            <input type="number" className="lsOptionInput" />
                        </div>

                        <div className="lsOptionItem">
                            <span className="lsOptionText">Max Price <small>per night</small></span>
                            <input type="number" className="lsOptionInput" />
                        </div>

                        <div className="lsOptionItem">
                            <span className="lsOptionText">Adult</span>
                            <input type="number" className="lsOptionInput" min={1} placeholder={options.adult}/>
                        </div>

                        <div className="lsOptionItem">
                            <span className="lsOptionText">Children</span>
                            <input type="number" className="lsOptionInput" min={0} placeholder={options.children}/>
                        </div>

                        <div className="lsOptionItem">
                            <span className="lsOptionText">Room</span>
                            <input type="number" className="lsOptionInput" min={1} placeholder={options.room}/>
                        </div>
                        </div>
                     
                    </div>
                    <button>Search</button>
                </div>
                <div className="listResult">
                          <SearchItem/>
                          <SearchItem/>
                          <SearchItem/>
                          <SearchItem/>
                          <SearchItem/>
                          <SearchItem/>
                          <SearchItem/>
                          <SearchItem/>
                          <SearchItem/>
                          <SearchItem/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List
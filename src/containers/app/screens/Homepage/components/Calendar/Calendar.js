import React, { useRef } from 'react';
import useIsInViewport from '~/hooks/useIsInViewPort';
import './Calendar.sass';

function Calendar(props) {
    return (
        <div className="calendar flex-center">
            <div className="calendar-container">
                <header
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    {/* <div className="day">29</div> */}
                    <span className="month">29/04 - </span>
                    <span className="month">02/05/2023</span>
                </header>

                <table className="calendar__table flex-center">
                    <thead>
                        <tr>
                            <td>CN</td>
                            <td>T2</td>
                            <td>T3</td>
                            <td>T4</td>
                            <td>T5</td>
                            <td>T6</td>
                            <td>T7</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="prev-month">23</td>
                            <td className="prev-month">24</td>
                            <td className="prev-month">25</td>
                            <td className="prev-month">26</td>
                            <td className="prev-month">27</td>
                            <td className="prev-month">28</td>
                            <td className="current-day">29</td>
                        </tr>

                        <tr>
                            <td className="current-day">30</td>
                            <td className="current-day">1</td>
                            <td className="current-day">2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                        </tr>

                        <tr>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                        </tr>

                        <tr>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>19</td>
                            <td>20</td>
                        </tr>

                        <tr>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                            <td>26</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td>1</td>
                            <td>2</td>
                            <td className="next-month">3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Calendar;

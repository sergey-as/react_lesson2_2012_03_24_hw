import './App.css';
import {Component, useState} from "react";
import {Car} from "./components/car/Car";
import {Driver} from "./components/driver/Driver";
import {Checkbox} from "./components/checkbox/Checkbox"
import {User} from "./components/user/User";

// HW2 24.03.21
// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві
// створити окрему кнопку, яка буде видаляти поточний перший елемент (або останній)
// якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази,
// то на екрані жодна карточка не має відмалюватись  (кнопки повернення до початкового стану не треба)
// 2 те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)
// 3 задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку,
// ми видаляємо зі списку саме її + реверт кнопка, щоб вернути все назад (ця кнопка одна дня всіх карточок,
// клікнули по ній і всі каркти вернулись назазд) (згадування функції фільтр в лекції було не просто так)
// 4 написати тогл компоненту, яка буде ховати або показувати елемент приклад
// з візуалкою тут https://material-ui.com/components/switches/#customized-switches
// 5 зміна теми по кнопці (світла/темна)


const myCars = [
    {id: 1, model: 'civic', year: 1988, power: 75, color: 'red'},
    {id: 2, model: 'accord', year: 2000, power: 130, color: 'white'},
    {id: 3, model: 'cr-v', year: 2002, power: 150, color: 'green'},
];

const myDrivers = [
    {id: 1, name: 'petro', age: 37, gender: 'male', experience: 7},
    {id: 2, name: 'alla', age: 28, gender: 'female', experience: 3},
    {id: 3, name: 'ivan', age: 45, gender: 'male', experience: 20},
];

const myUsers = [
    {id: 1, name: 'kolya', age: 29, status: true},
    {id: 2, name: 'olya', age: 28, status: false},
    {id: 3, name: 'max', age: 30, status: true},
    {id: 4, name: 'anya', age: 31, status: false},
    {id: 5, name: 'oleg', age: 28, status: false},
];


function App() {

    const [cars, setCars] = useState(myCars);
    const [drivers, setDrivers] = useState(myDrivers);
    const [isDark, setDark] = useState(false);
    const myNewUsers = myUsers.map(user => {
        return {...user, hidden: false}
    });
    console.log(myNewUsers);
    const [users, setUsers] = useState(myNewUsers);

    // const clickHandlerFirst = () => {
    //     if (cars.length) {
    //         const newCars = [...cars];
    //         newCars.shift();
    //         setCars(newCars);
    //     }
    // }
    // const clickHandlerLast = () => {
    //     if (cars.length) {
    //         const newCars = [...cars];
    //         newCars.pop();
    //         setCars(newCars);
    //     }
    // }
    const clickHandlerDelete = (item) => {
        if (item !== 'first' && item !== 'last') return;
        if (!cars.length) return;

        const newCars = [...cars];
        console.log(item);
        // item === 'first' && newCars.shift();
        // item === 'last' && newCars.pop();
        item === 'first' ? newCars.shift() : newCars.pop();
        setCars(newCars);
    }

    const clickHandlerRevert = () => {
        setCars(myCars);
    }

    const clickHandlerRevertDrivers = () => {
        setDrivers(myDrivers);
    }

    const handleDelElem = (item) => {
        if (!drivers.length) return;
        const newDrivers = [...drivers];
        setDrivers(newDrivers.filter(el => (el.id !== item.id)));
    }

    const clickHandlerDark = () => {
        setDark(!isDark);
    }

    const handleHideElem = (item) => {
        if (!users.length) return;
        const newUsers = [...users];
        setUsers(newUsers.filter(el => (!el.hide)));
    }


    return (
        // <div className="App">
        <div className={`App${isDark ? ' dark' : ''}`}>
            <div>

                {/*<Toggle/>*/}
                <button onClick={clickHandlerDark}>{isDark ? 'Light' : 'Dark'} theme (tasks 5)</button>

                <br/>
                <>tasks 1, 2</>
                <br/>
                {/*<button onClick={clickHandlerFirst}>delete first</button>*/}
                <button onClick={() => clickHandlerDelete('first')}>delete first</button>
                <button onClick={clickHandlerRevert}>revert</button>
                <br/>

                {cars.map(car => (<Car key={car.id} car={car}/>))}

                <br/>
                <button onClick={() => clickHandlerDelete('last')}>delete last</button>
                <button onClick={clickHandlerRevert}>revert</button>
                <br/>
            </div>

            <hr/>

            <div>
                <>task 3</>
                <br/>
                <button onClick={clickHandlerRevertDrivers}>revert</button>

                {drivers.map(driver => (
                    <Driver key={driver.id} driver={driver} funcDeleteButton={() => handleDelElem(driver)}/>))}
            </div>

            <hr/>

            <div>
                <>task 4</>
                <Checkbox/>

                {/*{users.map(user => showUser(user))}*/}
            </div>

        </div>
    );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import Form from './Form';
import HeaderHomePage from './HeaderHomePage';
import HeaderList from './HeaderList';
import StartPage from './StartPage';
import TotalMoney from './TotalMoney';

function App() {

  const [isStartPage, setIsStartPage] = useState(true)

  const [transationList, setTransationList] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Saida", value: -150 }
  ])

  const addNewTransation = (newTransation) => {
    setTransationList([...transationList, newTransation])
  }

  const [filteredTransactions, setFilteredTransactions] = useState([])

  const [filter, setFilter] = useState("Todos")
  
  useEffect(() =>{
    if(filter === "Todos"){
      setFilteredTransactions([])
    }
    else{
      const newFilter = transationList.filter((el) => {
          return el.type === filter
      })
      
      setFilteredTransactions(newFilter)
    }
  }, [filter, transationList]) 

    const removeTransaction = (remove) => {
        setTransationList(transationList.filter((el) => {
            return el !== remove
        }))
    }

  return (
    <div className="App">
      {isStartPage?
        <StartPage setIsStartPage={setIsStartPage}></StartPage>
        :
        <>
          <HeaderHomePage setIsStartPage={setIsStartPage}></HeaderHomePage>
          <main className='main'>
            <aside>
              <Form addNewTransation={addNewTransation}></Form>
              <TotalMoney transationList={transationList}></TotalMoney>
            </aside>
            <section className='sectionList'>
              <HeaderList setFilter={setFilter} removeTransaction={removeTransaction}></HeaderList>
              <Card transationList={transationList} filteredTransactions={filteredTransactions} removeTransaction={removeTransaction}></Card>
            </section>
          </main>
        </>
      }
    </div>
  );
}

export default App;

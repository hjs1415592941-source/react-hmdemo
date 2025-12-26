import BarChart from "./components/Barchart"

const Home=()=>{
 
  return (<div>
     <BarChart title='三大框架使用度'sData={[2000, 5000, 1000]} ></BarChart>
     <BarChart title='三大框架满意度' sData={[2000, 5000, 1000]}></BarChart>
        </div>)
}
export default Home
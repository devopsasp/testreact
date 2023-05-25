import LoginComp from "../components/login";
import { fireEvent, render,screen } from "@testing-library/react";

test("testing longin comp ui",()=>{
  
    render(<LoginComp/>)
    const label1 =screen.getByTestId("label1")
    const label2 =screen.getByTestId("label2")
    const textfield1=screen.getByTestId("text1")
    const textfield2=screen.getByTestId("text2")
    const button=screen.getByTestId("button1")
    fireEvent.change(textfield1,{target:{value:'admin'}})
    fireEvent.change(textfield2,{target:{value:'admin1'}})
    fireEvent.click(button)
    const label3=screen.getByTestId("text3")
    expect(label1).toHaveTextContent("Enter User Name")
    expect(label2).toHaveTextContent("Enter Password")
    expect(label3).toHaveTextContent("invalid user details")
})
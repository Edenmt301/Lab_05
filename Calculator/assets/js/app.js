const addButton=document.querySelector("#add_but");

addButton.addEventListener('click',addition)

const subButton=document.querySelector("#sub_but");

subButton.addEventListener('click',subtraction)

const multiButton=document.querySelector("#multi_but");

multiButton.addEventListener('click',multiplication)

const divButton=document.querySelector("#div_but");

divButton.addEventListener('click',division)

const each=document.querySelectorAll('.each_ope')

const space=document.querySelector(".collection")

function clearSpace(space){
    while (space.firstChild) {
        space.removeChild(space.firstChild);
    }
}


function addition(e){
    clearSpace(space)
    const li=document.createElement('li');
    const label=document.createElement("label");
    const input=document.createElement("input");
    const input2=document.createElement('input'); 
    li.className="collection-item"
    label.appendChild(document.createTextNode("How many numbers do you want to add?"))
    input.type="text"
    input.name="numbers"
    input.id="numbers"
    input.required=true
    input2.type="submit"
    input2.value='continue'
    input2.className="btn blue"
    input2.id="no_values"
    li.appendChild(label)
    li.appendChild(input)
    li.appendChild(input2)
    space.appendChild(li);

    const val_button=document.querySelector('#no_values')

    val_button.addEventListener('click',inputs_loader)
    function inputs_loader(e){
        const values=(document.querySelector('#numbers')).value
        for (let i = 0; i < parseInt(values); i++) {
            const li=document.createElement('li');
            const label=document.createElement("label");
            const input=document.createElement("input");
            label.appendChild(document.createTextNode("Enter value " + (i + 1)))
            input.type="text"
            input.name="values"
            input.id="values"
            li.appendChild(label)
            li.appendChild(input)
            space.appendChild(li);
        }
        const li=document.createElement('li');
        const input2=document.createElement('input'); 
        input2.type="submit"
        input2.value='ADD'
        input2.className="btn blue"
        input2.id="add_numbers"
        li.appendChild(input2)
        space.appendChild(li);
        const add_button=document.querySelector('#add_numbers')

            add_button.addEventListener('click',AddFun)
            function AddFun(e){
                numbersToAdd=document.querySelectorAll('#values')
                result=0
                numbersToAdd.forEach(function(member) {
                    result=result + parseInt(member.value)
                });
                const li=document.createElement('li');
                li.appendChild(document.createTextNode("The result is " + result))
                li.style.padding='2rem'
                li.style.fontSize='1.5rem'
                space.appendChild(li);
            }
    }
    


}

function subtraction(e){
    clearSpace(space)
    const li=document.createElement('li');
    const label1=document.createElement("label");
    const input1=document.createElement("input");
    const label2=document.createElement("label");
    const input2=document.createElement("input");
    const sub=document.createElement('input'); 
    li.className="collection-item"
    label1.appendChild(document.createTextNode("First number"))
    label2.appendChild(document.createTextNode("Second number"))
    input1.type="text"
    input1.name="numbers"
    input1.id="values"
    input2.type="text"
    input2.name="numbers"
    input2.id="values"
    sub.type="submit"
    sub.value='SUBTRACT'
    sub.className="btn blue"
    sub.id="subtract"
    li.appendChild(label1)
    li.appendChild(input1)
    li.appendChild(label2)
    li.appendChild(input2)
    li.appendChild(sub)
    space.appendChild(li);

    const sub_button=document.querySelector('#subtract')

    sub_button.addEventListener('click',SubFun)
    function SubFun(e){
        numbersToSub=document.querySelectorAll('#values')
        result=parseInt(numbersToSub[0].value) - parseInt(numbersToSub[1].value)
        const li=document.createElement('li');
                li.appendChild(document.createTextNode("The result is " + result))
                li.style.padding='2rem'
                li.style.fontSize='1.5rem'
                space.appendChild(li);
    }

}

function multiplication(e){
    clearSpace(space)
    const li=document.createElement('li');
    const label=document.createElement("label");
    const input=document.createElement("input");
    const input2=document.createElement('input'); 
    li.className="collection-item"
    label.appendChild(document.createTextNode("How many numbers do you want to multiply?"))
    input.type="text"
    input.name="numbers"
    input.id="numbers"
    input2.type="submit"
    input2.value='continue'
    input2.className="btn blue"
    input2.id="no_values"
    li.appendChild(label)
    li.appendChild(input)
    li.appendChild(input2)
    space.appendChild(li);

    const val_button=document.querySelector('#no_values')

    val_button.addEventListener('click',inputs_loader)
    function inputs_loader(e){
        const values=(document.querySelector('#numbers')).value
        for (let i = 0; i < parseInt(values); i++) {
            const li=document.createElement('li');
            const label=document.createElement("label");
            const input=document.createElement("input");
            label.appendChild(document.createTextNode("Enter value " + (i + 1)))
            input.type="text"
            input.name="values"
            input.id="values"
            li.appendChild(label)
            li.appendChild(input)
            space.appendChild(li);
        }
        const li=document.createElement('li');
        const input2=document.createElement('input'); 
        input2.type="submit"
        input2.value='MULTIPLY'
        input2.className="btn blue"
        input2.id="multiply_numbers"
        li.appendChild(input2)
        space.appendChild(li);
        const add_button=document.querySelector('#multiply_numbers')

            add_button.addEventListener('click',MultiFun)
            function MultiFun(e){
                numbersToMultiply=document.querySelectorAll('#values')
                result=1
                numbersToMultiply.forEach(function(member) {
                    result=result * parseInt(member.value)
                });
                const li=document.createElement('li');
                li.appendChild(document.createTextNode("The result is " + result))
                li.style.padding='2rem'
                li.style.fontSize='1.5rem'
                space.appendChild(li);
            }
    }
    


}

function division(e){
    clearSpace(space)
    const li=document.createElement('li');
    const label1=document.createElement("label");
    const input1=document.createElement("input");
    const label2=document.createElement("label");
    const input2=document.createElement("input");
    const div=document.createElement('input'); 
    li.className="collection-item"
    label1.appendChild(document.createTextNode("First number"))
    label2.appendChild(document.createTextNode("Second number"))
    input1.type="text"
    input1.name="numbers"
    input1.id="values"
    input2.type="text"
    input2.name="numbers"
    input2.id="values"
    div.type="submit"
    div.value='DIVIDE'
    div.className="btn blue"
    div.id="divide"
    li.appendChild(label1)
    li.appendChild(input1)
    li.appendChild(label2)
    li.appendChild(input2)
    li.appendChild(div)
    space.appendChild(li);

    const div_button=document.querySelector('#divide')

    div_button.addEventListener('click',DivFun)
    function DivFun(e){
        numbersToSub=document.querySelectorAll('#values')
        const li=document.createElement('li');
        if (numbersToSub[1].value==='0'){
            li.appendChild(document.createTextNode("Invalid input:denominator can not be 0"))
        }
        else{
            result=parseInt(numbersToSub[0].value) / parseInt(numbersToSub[1].value)
            li.appendChild(document.createTextNode("The result is " + result))
        }    
        li.style.padding='2rem'
        li.style.fontSize='1.5rem'
        space.appendChild(li);
    }

}




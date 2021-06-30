function myF1() {
    alert("Do you know the time complexity of bubbleSort\n Worst case: O(n^2)\n Average case: O(n^2)\n Best case: O(n)\n");
  }
async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'rgb(0, 217, 255)';
            ele[j+1].style.background = 'rgb(0, 217, 255)';
        }
        ele[ele.length-1-i].style.background = 'lightgreen';
    }
    ele[0].style.background = 'lightgreen';
    setTimeout(myF1, 1000);
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

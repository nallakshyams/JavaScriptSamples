function power(base, exponent){
    if(exponent === 0)return 1;
    return base * power(base,exponent-1);
}

//power(2, 0) //op 1
//power(2, 1) //op 2
//power(2, 7) //op 128
power(3, 3) //op 27
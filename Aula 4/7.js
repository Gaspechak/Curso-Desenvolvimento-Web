const ordenaVetor = (v) => {
    let n = v.length;
    for (let i = 0; i < n - 1; i++) {
        let menorIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (v[j] < v[menorIndex])
                menorIndex = j;
            let temp = v[menorIndex];
            v[menorIndex] = v[i];
            v[i] = temp;
        }
    }
    console.log(v)
}

ordenaVetor([2, 3, 1, 5, 4])
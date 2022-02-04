const ordenar = (nums) => {
    return nums.sort((n1, n2) => n1 - n2);
}

const removerDuplicados = (nums) => {
    return [...new Set(nums)]
}

export {ordenar, removerDuplicados};

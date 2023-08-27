export const isEmail = (stringEmail) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
}

export const isPhone = (number) => {
    return (/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/.test(number))
}


export const isPassword = (stringPassword) => stringPassword.length > 0
export const isPassword2 = (stringPassword2) => stringPassword2.length > 0

export const isName = (stringName) => stringName.length > 0

export const isUseName = (stringUseName) => stringUseName.length > 0
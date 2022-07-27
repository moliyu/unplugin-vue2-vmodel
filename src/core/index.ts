export const transform = (code: string) => {
  // const templateReg = /<template>[\S\s]*<\/template>/
  const vmodelReg = /(v-model:)(\S+)\s?=/g
  return code.replace(vmodelReg, (...args) => {
    const [_match, _vmodel, modelValue] = args
    if (modelValue === 'value') {
      return `v-model=`
    }
    return `:${modelValue}.sync=`
  })
}
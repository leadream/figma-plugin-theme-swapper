// 所有的本地颜色样式
// 详见 https://www.figma.com/plugin-docs/api/figma/#getlocalpaintstyles
const styles = figma.getLocalPaintStyles()

export function swapTheme (targetTheme) {
  // 当前用户选择的所有元素
  const sels = figma.currentPage.selection
  // 原始主题，和目标主题相反
  const originalTheme = targetTheme==='Light' ? 'Dark' : 'Light'
  
  if (sels.length===0) {
    // 如果用户未选取任何东西，要提示用户先选取一些元素
    figma.notify('请选择元素')
  } else {
    // 循环处理每一个所选元素
    sels.map(sel => {
      // 如果含有 fillStyleId 则表明该元素使用了样式，才可以替换样式
      // fillStyleId 可能是混合的，比如一个文字图层可以添加好几种颜色（每个字一个颜色），这种情况先不处理
      if (sel.fillStyleId && sel.fillStyleId!==figma.mixed) {
        // 根据样式 ID 获取样式的完整数据
        // style 是一个对象，包含该样式的名字、描述等信息，比如 { name: 'Light/Text', description: '亮色文字颜色' }
        // 详见 https://www.figma.com/plugin-docs/api/figma/#getstylebyid
        const style = figma.getStyleById(sel.fillStyleId)
        if (style) {
          // 将样式名中的前缀换成目标主题前缀，比如将 Light/Text 中的 Light 换成 Dark
          // 那么要替换的目标样式名就是 Dark/Text
          const newStyleName = style.name.replace(originalTheme, targetTheme)
          // 根据这个新名字从本地样式列表中找到要替换的目标样式
          const newStyle = styles.find(style => style.name===newStyleName)
          if (newStyle) {
            // 如果找到的话，直接把 fillStyleId 改为新的样式 ID 就完成了替换
            sel.fillStyleId = newStyle.id
          }
        }
      }
    })
  }
}

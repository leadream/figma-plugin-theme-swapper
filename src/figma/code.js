import { swapTheme } from './main'

figma.showUI(__html__, { width: 200, height: 200 });

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case 'swap-theme':
      swapTheme(msg.targetTheme)
      break;
  }
}

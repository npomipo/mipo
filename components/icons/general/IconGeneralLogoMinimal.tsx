import stls from '@/styles/components/icons/general/IconGeneralLogoMinimal.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors, companyName } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralLogoMinimalProps = TPropClassNames & TPropColor

const IconGeneralLogoMinimal = ({
  classNames,
  color
}: TIconGeneralLogoMinimalProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg
        viewBox='0 0 1317 1317'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <title>{companyName}</title>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M892.995 44.674H703.33C655.717 44.674 617.118 83.2721 617.118 130.885V320.551H806.784C854.397 320.551 892.995 281.952 892.995 234.339V44.674ZM703.33 10.1892C636.671 10.1892 582.634 64.2268 582.634 130.885V320.551H255.03V234.339C255.03 224.816 262.75 217.097 272.272 217.097H340.552C350.455 217.097 358.484 225.125 358.484 235.029V256.754H392.968V235.029C392.968 206.08 369.501 182.612 340.552 182.612H272.272C243.704 182.612 220.545 205.771 220.545 234.339V355.035H582.634V699.881H355.035V510.216C355.035 443.558 300.998 389.52 234.339 389.52H10.1892V613.67C10.1892 680.329 64.2267 734.366 130.885 734.366H320.551V1044.73H234.339C224.817 1044.73 217.097 1037.01 217.097 1027.49V959.206C217.097 949.302 225.125 941.274 235.029 941.274H256.754V906.789H235.029C206.08 906.789 182.612 930.257 182.612 959.206V1027.49C182.612 1056.05 205.771 1079.21 234.339 1079.21H355.035V734.366H699.881V961.965H510.216C443.557 961.965 389.52 1016 389.52 1082.66V1306.81H613.67C680.328 1306.81 734.366 1252.77 734.366 1186.11V996.449H1048.18V1082.66C1048.18 1092.18 1040.46 1099.9 1030.93 1099.9H962.654C952.751 1099.9 944.722 1091.87 944.722 1081.97V1060.25H910.238V1081.97C910.238 1110.92 933.705 1134.39 962.654 1134.39H1030.93C1059.5 1134.39 1082.66 1111.23 1082.66 1082.66V961.965H734.366V617.119H961.964V806.784C961.964 873.443 1016 927.48 1082.66 927.48H1306.81V703.33C1306.81 636.671 1252.77 582.634 1186.11 582.634H996.449V272.272H1082.66C1092.18 272.272 1099.9 279.992 1099.9 289.515V357.794C1099.9 367.698 1091.87 375.726 1081.97 375.726H1060.25V410.211H1081.97C1110.92 410.211 1134.39 386.743 1134.39 357.794V289.515C1134.39 260.947 1111.23 237.788 1082.66 237.788H961.964V582.634H617.118V355.035H806.784C873.442 355.035 927.48 300.998 927.48 234.339V10.1892H703.33ZM617.118 617.119H699.881V699.881H617.118V617.119ZM320.551 510.216V699.881H130.885C83.2721 699.881 44.6738 661.283 44.6738 613.67V424.005H234.339C281.953 424.005 320.551 462.603 320.551 510.216ZM424.005 1272.33H613.67C661.283 1272.33 699.881 1233.73 699.881 1186.11V996.449H510.216C462.603 996.449 424.005 1035.05 424.005 1082.66V1272.33ZM1272.33 703.33V892.995H1082.66C1035.05 892.995 996.449 854.397 996.449 806.784V617.119H1186.11C1233.73 617.119 1272.33 655.717 1272.33 703.33Z'
          fill={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M348.295 266.943V235.029C348.295 230.753 344.828 227.286 340.552 227.286H272.272C268.377 227.286 265.219 230.444 265.219 234.339V310.362H572.445V130.885C572.445 58.5994 631.044 0 703.33 0H937.669V234.339C937.669 306.625 879.07 365.225 806.784 365.225H627.308V572.445H951.775V227.598H1082.66C1116.86 227.598 1144.58 255.319 1144.58 289.515V357.794C1144.58 392.37 1116.55 420.4 1081.97 420.4H1050.06V365.537H1081.97C1086.25 365.537 1089.71 362.07 1089.71 357.794V289.515C1089.71 285.619 1086.56 282.462 1082.66 282.462H1006.64V572.445H1186.11C1258.4 572.445 1317 631.044 1317 703.33V937.669H1082.66C1010.37 937.669 951.775 879.07 951.775 806.784V627.308H744.555V951.775H1092.85V1082.66C1092.85 1116.86 1065.13 1144.58 1030.93 1144.58H962.654C928.078 1144.58 900.048 1116.55 900.048 1081.97V1050.06H954.911V1081.97C954.911 1086.25 958.378 1089.71 962.654 1089.71H1030.93C1034.83 1089.71 1037.99 1086.56 1037.99 1082.66V1006.64H744.555V1186.11C744.555 1258.4 685.956 1317 613.67 1317H379.331V1082.66C379.331 1010.37 437.93 951.775 510.216 951.775H689.692V744.555H365.225V1089.4H234.339C200.144 1089.4 172.423 1061.68 172.423 1027.49V959.206C172.423 924.63 200.453 896.6 235.029 896.6H266.943V951.463H235.029C230.753 951.463 227.286 954.93 227.286 959.206V1027.49C227.286 1031.38 230.444 1034.54 234.339 1034.54H310.362V744.555H130.885C58.5994 744.555 0 685.956 0 613.67V379.331H234.339C306.625 379.331 365.225 437.93 365.225 510.216V689.692H572.445V365.225H210.356V234.339C210.356 200.144 238.077 172.423 272.272 172.423H340.552C375.128 172.423 403.158 200.453 403.158 235.029V266.943H348.295ZM582.634 355.035V699.881H355.035V510.216C355.035 443.558 300.998 389.52 234.339 389.52H10.1892V613.67C10.1892 680.329 64.2267 734.366 130.885 734.366H320.551V1044.73H234.339C224.817 1044.73 217.097 1037.01 217.097 1027.49V959.206C217.097 949.302 225.125 941.274 235.029 941.274H256.754V906.789H235.029C206.08 906.789 182.612 930.257 182.612 959.206V1027.49C182.612 1056.05 205.771 1079.21 234.339 1079.21H355.035V734.366H699.881V961.965H510.216C443.557 961.965 389.52 1016 389.52 1082.66V1306.81H613.67C680.328 1306.81 734.366 1252.77 734.366 1186.11V996.449H1048.18V1082.66C1048.18 1092.18 1040.46 1099.9 1030.93 1099.9H962.654C952.751 1099.9 944.722 1091.87 944.722 1081.97V1060.25H910.238V1081.97C910.238 1110.92 933.705 1134.39 962.654 1134.39H1030.93C1059.5 1134.39 1082.66 1111.23 1082.66 1082.66V961.965H734.366V617.119H961.964V806.784C961.964 873.443 1016 927.48 1082.66 927.48H1306.81V703.33C1306.81 636.671 1252.77 582.634 1186.11 582.634H996.449V272.272H1082.66C1092.18 272.272 1099.9 279.992 1099.9 289.515V357.794C1099.9 367.698 1091.87 375.726 1081.97 375.726H1060.25V410.211H1081.97C1110.92 410.211 1134.39 386.743 1134.39 357.794V289.515C1134.39 260.947 1111.23 237.788 1082.66 237.788H961.964V582.634H617.118V355.035H806.784C873.442 355.035 927.48 300.998 927.48 234.339V10.1892H703.33C636.671 10.1892 582.634 64.2268 582.634 130.885V320.551H255.03V234.339C255.03 224.816 262.75 217.097 272.272 217.097H340.552C350.455 217.097 358.484 225.125 358.484 235.029V256.754H392.968V235.029C392.968 206.08 369.501 182.612 340.552 182.612H272.272C243.704 182.612 220.545 205.771 220.545 234.339V355.035H582.634ZM882.806 54.8631H703.33C661.344 54.8631 627.308 88.8994 627.308 130.885V310.362H806.784C848.77 310.362 882.806 276.325 882.806 234.339V54.8631ZM617.118 617.119H699.881V699.881H617.118V617.119ZM627.308 689.692H689.692V627.308H627.308V689.692ZM310.362 689.692V510.216C310.362 468.23 276.325 434.194 234.339 434.194H54.863V613.67C54.863 655.656 88.8994 689.692 130.885 689.692H310.362ZM320.551 510.216C320.551 462.603 281.953 424.005 234.339 424.005H44.6738V613.67C44.6738 661.283 83.2721 699.881 130.885 699.881H320.551V510.216ZM434.194 1262.14H613.67C655.656 1262.14 689.692 1228.1 689.692 1186.11V1006.64H510.216C468.23 1006.64 434.194 1040.67 434.194 1082.66V1262.14ZM1262.14 882.806V703.33C1262.14 661.344 1228.1 627.308 1186.11 627.308H1006.64V806.784C1006.64 848.77 1040.67 882.806 1082.66 882.806H1262.14ZM1272.33 892.995H1082.66C1035.05 892.995 996.449 854.397 996.449 806.784V617.119H1186.11C1233.73 617.119 1272.33 655.717 1272.33 703.33V892.995ZM892.995 44.674V234.339C892.995 281.952 854.397 320.551 806.784 320.551H617.118V130.885C617.118 83.2721 655.717 44.674 703.33 44.674H892.995ZM424.005 1272.33V1082.66C424.005 1035.05 462.603 996.449 510.216 996.449H699.881V1186.11C699.881 1233.73 661.283 1272.33 613.67 1272.33H424.005Z'
          fill={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M892.995 44.674H703.33C655.717 44.674 617.118 83.2721 617.118 130.885V320.551H806.784C854.397 320.551 892.995 281.952 892.995 234.339V44.674ZM703.33 10.1892C636.671 10.1892 582.634 64.2268 582.634 130.885V320.551H255.03V234.339C255.03 224.816 262.75 217.097 272.272 217.097H340.552C350.455 217.097 358.484 225.125 358.484 235.029V256.754H392.968V235.029C392.968 206.08 369.501 182.612 340.552 182.612H272.272C243.704 182.612 220.545 205.771 220.545 234.339V355.035H582.634V699.881H355.035V510.216C355.035 443.558 300.998 389.52 234.339 389.52H10.1892V613.67C10.1892 680.329 64.2267 734.366 130.885 734.366H320.551V1044.73H234.339C224.817 1044.73 217.097 1037.01 217.097 1027.49V959.206C217.097 949.302 225.125 941.274 235.029 941.274H256.754V906.789H235.029C206.08 906.789 182.612 930.257 182.612 959.206V1027.49C182.612 1056.05 205.771 1079.21 234.339 1079.21H355.035V734.366H699.881V961.965H510.216C443.557 961.965 389.52 1016 389.52 1082.66V1306.81H613.67C680.328 1306.81 734.366 1252.77 734.366 1186.11V996.449H1048.18V1082.66C1048.18 1092.18 1040.46 1099.9 1030.93 1099.9H962.654C952.751 1099.9 944.722 1091.87 944.722 1081.97V1060.25H910.238V1081.97C910.238 1110.92 933.705 1134.39 962.654 1134.39H1030.93C1059.5 1134.39 1082.66 1111.23 1082.66 1082.66V961.965H734.366V617.119H961.964V806.784C961.964 873.443 1016 927.48 1082.66 927.48H1306.81V703.33C1306.81 636.671 1252.77 582.634 1186.11 582.634H996.449V272.272H1082.66C1092.18 272.272 1099.9 279.992 1099.9 289.515V357.794C1099.9 367.698 1091.87 375.726 1081.97 375.726H1060.25V410.211H1081.97C1110.92 410.211 1134.39 386.743 1134.39 357.794V289.515C1134.39 260.947 1111.23 237.788 1082.66 237.788H961.964V582.634H617.118V355.035H806.784C873.442 355.035 927.48 300.998 927.48 234.339V10.1892H703.33ZM617.118 617.119H699.881V699.881H617.118V617.119ZM320.551 510.216V699.881H130.885C83.2721 699.881 44.6738 661.283 44.6738 613.67V424.005H234.339C281.953 424.005 320.551 462.603 320.551 510.216ZM424.005 1272.33H613.67C661.283 1272.33 699.881 1233.73 699.881 1186.11V996.449H510.216C462.603 996.449 424.005 1035.05 424.005 1082.66V1272.33ZM1272.33 703.33V892.995H1082.66C1035.05 892.995 996.449 854.397 996.449 806.784V617.119H1186.11C1233.73 617.119 1272.33 655.717 1272.33 703.33Z'
          stroke={color || colors.alpha}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M348.295 266.943V235.029C348.295 230.753 344.828 227.286 340.552 227.286H272.272C268.377 227.286 265.219 230.444 265.219 234.339V310.362H572.445V130.885C572.445 58.5994 631.044 0 703.33 0H937.669V234.339C937.669 306.625 879.07 365.225 806.784 365.225H627.308V572.445H951.775V227.598H1082.66C1116.86 227.598 1144.58 255.319 1144.58 289.515V357.794C1144.58 392.37 1116.55 420.4 1081.97 420.4H1050.06V365.537H1081.97C1086.25 365.537 1089.71 362.07 1089.71 357.794V289.515C1089.71 285.619 1086.56 282.462 1082.66 282.462H1006.64V572.445H1186.11C1258.4 572.445 1317 631.044 1317 703.33V937.669H1082.66C1010.37 937.669 951.775 879.07 951.775 806.784V627.308H744.555V951.775H1092.85V1082.66C1092.85 1116.86 1065.13 1144.58 1030.93 1144.58H962.654C928.078 1144.58 900.048 1116.55 900.048 1081.97V1050.06H954.911V1081.97C954.911 1086.25 958.378 1089.71 962.654 1089.71H1030.93C1034.83 1089.71 1037.99 1086.56 1037.99 1082.66V1006.64H744.555V1186.11C744.555 1258.4 685.956 1317 613.67 1317H379.331V1082.66C379.331 1010.37 437.93 951.775 510.216 951.775H689.692V744.555H365.225V1089.4H234.339C200.144 1089.4 172.423 1061.68 172.423 1027.49V959.206C172.423 924.63 200.453 896.6 235.029 896.6H266.943V951.463H235.029C230.753 951.463 227.286 954.93 227.286 959.206V1027.49C227.286 1031.38 230.444 1034.54 234.339 1034.54H310.362V744.555H130.885C58.5994 744.555 0 685.956 0 613.67V379.331H234.339C306.625 379.331 365.225 437.93 365.225 510.216V689.692H572.445V365.225H210.356V234.339C210.356 200.144 238.077 172.423 272.272 172.423H340.552C375.128 172.423 403.158 200.453 403.158 235.029V266.943H348.295ZM582.634 355.035V699.881H355.035V510.216C355.035 443.558 300.998 389.52 234.339 389.52H10.1892V613.67C10.1892 680.329 64.2267 734.366 130.885 734.366H320.551V1044.73H234.339C224.817 1044.73 217.097 1037.01 217.097 1027.49V959.206C217.097 949.302 225.125 941.274 235.029 941.274H256.754V906.789H235.029C206.08 906.789 182.612 930.257 182.612 959.206V1027.49C182.612 1056.05 205.771 1079.21 234.339 1079.21H355.035V734.366H699.881V961.965H510.216C443.557 961.965 389.52 1016 389.52 1082.66V1306.81H613.67C680.328 1306.81 734.366 1252.77 734.366 1186.11V996.449H1048.18V1082.66C1048.18 1092.18 1040.46 1099.9 1030.93 1099.9H962.654C952.751 1099.9 944.722 1091.87 944.722 1081.97V1060.25H910.238V1081.97C910.238 1110.92 933.705 1134.39 962.654 1134.39H1030.93C1059.5 1134.39 1082.66 1111.23 1082.66 1082.66V961.965H734.366V617.119H961.964V806.784C961.964 873.443 1016 927.48 1082.66 927.48H1306.81V703.33C1306.81 636.671 1252.77 582.634 1186.11 582.634H996.449V272.272H1082.66C1092.18 272.272 1099.9 279.992 1099.9 289.515V357.794C1099.9 367.698 1091.87 375.726 1081.97 375.726H1060.25V410.211H1081.97C1110.92 410.211 1134.39 386.743 1134.39 357.794V289.515C1134.39 260.947 1111.23 237.788 1082.66 237.788H961.964V582.634H617.118V355.035H806.784C873.442 355.035 927.48 300.998 927.48 234.339V10.1892H703.33C636.671 10.1892 582.634 64.2268 582.634 130.885V320.551H255.03V234.339C255.03 224.816 262.75 217.097 272.272 217.097H340.552C350.455 217.097 358.484 225.125 358.484 235.029V256.754H392.968V235.029C392.968 206.08 369.501 182.612 340.552 182.612H272.272C243.704 182.612 220.545 205.771 220.545 234.339V355.035H582.634ZM882.806 54.8631H703.33C661.344 54.8631 627.308 88.8994 627.308 130.885V310.362H806.784C848.77 310.362 882.806 276.325 882.806 234.339V54.8631ZM617.118 617.119H699.881V699.881H617.118V617.119ZM627.308 689.692H689.692V627.308H627.308V689.692ZM310.362 689.692V510.216C310.362 468.23 276.325 434.194 234.339 434.194H54.863V613.67C54.863 655.656 88.8994 689.692 130.885 689.692H310.362ZM320.551 510.216C320.551 462.603 281.953 424.005 234.339 424.005H44.6738V613.67C44.6738 661.283 83.2721 699.881 130.885 699.881H320.551V510.216ZM434.194 1262.14H613.67C655.656 1262.14 689.692 1228.1 689.692 1186.11V1006.64H510.216C468.23 1006.64 434.194 1040.67 434.194 1082.66V1262.14ZM1262.14 882.806V703.33C1262.14 661.344 1228.1 627.308 1186.11 627.308H1006.64V806.784C1006.64 848.77 1040.67 882.806 1082.66 882.806H1262.14ZM1272.33 892.995H1082.66C1035.05 892.995 996.449 854.397 996.449 806.784V617.119H1186.11C1233.73 617.119 1272.33 655.717 1272.33 703.33V892.995ZM892.995 44.674V234.339C892.995 281.952 854.397 320.551 806.784 320.551H617.118V130.885C617.118 83.2721 655.717 44.674 703.33 44.674H892.995ZM424.005 1272.33V1082.66C424.005 1035.05 462.603 996.449 510.216 996.449H699.881V1186.11C699.881 1233.73 661.283 1272.33 613.67 1272.33H424.005Z'
          stroke={color || colors.alpha}
        />
      </svg>
    </IconContainer>
  )
}

export default IconGeneralLogoMinimal

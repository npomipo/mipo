import stls from '@/styles/components/icons/general/IconGeneralPercent.module.sass'
import { TPropClassNames, TPropColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { IconContainer } from '@/components/layout'

type TIconGeneralPercentProps = TPropClassNames & TPropColor

const IconGeneralPercent = ({
  classNames,
  color,
  fillColor
}: TIconGeneralPercentProps) => {
  return (
    <IconContainer classNames={[cn(stls.container, classNames)]}>
      <svg viewBox='0 0 198 180' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Процент</title>
        <path
          d='M49.4557 178.433L49.8414 178.656L50.1071 178.298L170.107 16.8866L170.41 16.4794L169.998 16.1827L149.763 1.59441L149.362 1.30535L149.068 1.70297L28.1272 165.468L27.7948 165.918L28.2793 166.198L49.4557 178.433ZM60.9031 9.28425L60.8897 9.28039L60.8761 9.27728C55.3606 8.01658 50.4592 7.38236 46.1765 7.38236C33.5162 7.38236 22.7298 11.2632 13.8472 19.0355C4.94551 26.8245 0.5 37.0837 0.5 49.7647C0.5 62.1361 4.94828 72.3132 13.8434 80.2553L13.8472 80.2586C22.7298 88.0309 33.5162 91.9118 46.1765 91.9118C58.8339 91.9118 69.5424 88.1111 78.2699 80.4943L78.2704 80.4939C87.1721 72.7049 91.6177 62.4457 91.6177 49.7647C91.6177 40.0932 88.8405 31.5932 83.2803 24.2855C77.7208 16.9787 70.2545 11.9787 60.9031 9.28425ZM58.9844 63.3092L58.9837 63.3099C55.7966 66.8006 51.5454 68.5588 46.1765 68.5588C41.1391 68.5588 36.8782 66.7342 33.3646 63.0696C29.8411 59.2381 28.0882 54.8101 28.0882 49.7647C28.0882 44.7182 29.8416 40.3713 33.361 36.6989C36.8753 33.0318 41.1374 31.2059 46.1765 31.2059C51.215 31.2059 55.3943 33.031 58.7491 36.6908L58.749 36.6909L58.7567 36.6989C62.276 40.3713 64.0294 44.7182 64.0294 49.7647C64.0294 55.14 62.3441 59.644 58.9844 63.3092ZM119.726 163.079L119.73 163.082C128.612 170.854 139.399 174.735 152.059 174.735C164.567 174.735 175.275 170.773 184.157 162.844C193.052 154.901 197.5 144.724 197.5 132.353C197.5 122.683 194.724 114.26 189.162 107.108C183.602 99.8017 176.136 94.8021 166.786 92.1078L166.772 92.1039L166.758 92.1008C161.243 90.8401 156.342 90.2059 152.059 90.2059C139.554 90.2059 128.77 94.0877 119.733 101.856L119.73 101.859C110.829 109.647 106.382 119.827 106.382 132.353C106.382 144.879 110.829 155.135 119.726 163.079ZM164.639 145.419L164.639 145.419L164.631 145.427C161.277 149.087 157.097 150.912 152.059 150.912C147.02 150.912 142.758 149.086 139.243 145.419C135.724 141.746 133.971 137.399 133.971 132.353C133.971 127.141 135.652 122.715 139.012 119.048C142.522 115.387 146.86 113.559 152.059 113.559C157.259 113.559 161.515 115.387 164.867 119.044C168.229 122.712 169.912 127.139 169.912 132.353C169.912 137.399 168.158 141.746 164.639 145.419Z'
          stroke='url(#paint0_linear_901_9546)'
          fill={fillColor}
        />
        <defs>
          <linearGradient
            id='paint0_linear_901_9546'
            x1='10.2235'
            y1='178'
            x2='93.7679'
            y2='61.0544'
            gradientUnits='userSpaceOnUse'>
            <stop stopColor={color || colors['nu-2']} />
            <stop offset='1' stopColor={color || colors['xi-2']} />
          </linearGradient>
        </defs>
      </svg>
    </IconContainer>
  )
}

export default IconGeneralPercent

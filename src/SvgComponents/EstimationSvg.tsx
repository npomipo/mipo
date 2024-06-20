import * as React from "react"
import { SVGProps } from "react"

const EstimationSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <path
      fill="#3F3BFF"
      d="m27.5 0 3.888 8.148 8.951 1.18-6.548 6.216 1.644 8.878-7.935-4.307-7.935 4.307 1.644-8.878-6.548-6.216 8.95-1.18L27.5 0ZM22.408 31v12h-2.992V32.312h.976l-6.4 7.072-.032-.96h10.432v2.272H11.736v-2.144L18.584 31h3.824Zm4.795 12.16a1.77 1.77 0 0 1-.88-.224 1.791 1.791 0 0 1-.608-.624 1.683 1.683 0 0 1-.224-.864 1.661 1.661 0 0 1 .832-1.472c.267-.16.56-.24.88-.24.32 0 .608.08.864.24.256.15.459.352.608.608.16.256.24.544.24.864 0 .32-.08.608-.24.864-.15.256-.352.464-.608.624-.256.15-.544.224-.864.224Zm9.376-12.416c1.931 0 3.408.299 4.432.896 1.024.597 1.536 1.43 1.536 2.496 0 .96-.453 1.69-1.36 2.192-.896.49-2.149.71-3.76.656v-.32c1.74-.128 3.094.07 4.064.592.971.512 1.456 1.317 1.456 2.416 0 1.152-.544 2.037-1.632 2.656-1.088.619-2.666.928-4.736.928-2.048 0-3.62-.31-4.72-.928-1.088-.619-1.632-1.504-1.632-2.656 0-1.099.486-1.904 1.456-2.416.971-.523 2.326-.72 4.064-.592v.32c-1.61.053-2.869-.165-3.776-.656-.896-.501-1.344-1.232-1.344-2.192 0-1.067.512-1.899 1.536-2.496s2.496-.896 4.416-.896Zm0 10.192c1.078 0 1.9-.128 2.464-.384.566-.256.848-.63.848-1.12 0-.501-.282-.87-.848-1.104-.565-.245-1.386-.368-2.464-.368-1.077 0-1.898.123-2.464.368-.554.235-.832.603-.832 1.104 0 .49.278.864.832 1.12.566.256 1.387.384 2.464.384Zm0-5.12c.64 0 1.18-.048 1.616-.144.448-.107.784-.261 1.008-.464a.991.991 0 0 0 .336-.768c0-.437-.256-.773-.768-1.008-.5-.245-1.232-.368-2.192-.368-.949 0-1.68.123-2.192.368-.512.235-.768.57-.768 1.008 0 .31.112.565.336.768.235.203.571.357 1.008.464.448.096.987.144 1.616.144Z"
    />
  </svg>
)
export default EstimationSvg

export default function Terminal(): React.ReactElement {
  return (
    <div className="w-1/2 h-full flex items-center justify-end rounded-2xl">
      <div className="w-[90%] h-[80%] bg-[#2D2B55] dark:bg-[#1A1830] rounded-2xl rotate-1">
        <div className="w-full h-[10%] px-5 flex items-center gap-2">
          <div className="w-5 h-5 bg-[#E83939] rounded-full" />
          <div className="w-5 h-5 bg-[#FFDC80] rounded-full" />
          <div className="w-5 h-5 bg-[#89ED4B] rounded-full" />
        </div>
        <div className="w-full h-[90%] flex px-10 py-5 text-white text-lg">
          <div className="w-[30px] ">
            <p>
              <span className="mr-2 text-gray-400">1</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">2</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">3</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">4</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">5</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">6</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">7</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">8</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">9</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">10</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">11</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">12</span>
            </p>
            {/* <p>
              <span className="mr-2 text-gray-400">13</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">14</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">15</span>
            </p>
            <p>
              <span className="mr-2 text-gray-400">16</span>
            </p> */}
          </div>
          <div
          // className={styles.terminalText}
          >
            <p>
              <span className="text-[#F90]">const</span> <span className="text-[#FED158]">App</span>{' '}
              <span className="text-[#F90]">=</span> <span className="text-[#9BEAF9]">props</span>{' '}
              <span className="text-[#F90]">=&gt;</span> <span className="text-[#FED158]">&#123;</span>
            </p>
            <p>
              <span className="m-2" />
              <span className="text-[#F90]">const</span> <span className="text-[#BD67CC]">&#123;</span> name{' '}
              <span className="text-[#BD67CC]">&#125;</span> <span className="text-[#FED158]">=</span>{' '}
              <span className="text-[#9BEAF9]">props</span>
            </p>
            <p className="w-full" />
            <br />
            <p>
              <span className="m-2" />
              <span className="text-[#F90]">return</span> <span className="text-[#BD67CC]">&#40;</span>
            </p>
            <p>
              <span className="m-2" />
              <span className="m-2" />
              <span className="text-[#9BEAF9]">&lt;div&gt;</span>
            </p>
            <p>
              <span className="m-2" />
              <span className="m-2" />
              <span className="m-2" />
              <span className="text-[#9BEAF9]">&lt;h2&gt;</span>App of <span className="text-[#288BFF]">&#123;</span>{' '}
              name <span className="text-[#288BFF]">&#125;</span> 🚀!{' '}
              <span className="text-[#9BEAF9]">&lt;&#47;h2&gt;</span>
            </p>
            <p>
              <span className="m-2" />
              <span className="m-2" />
              <span className="text-[#9BEAF9]">&lt;&#47;div&gt;</span>
            </p>
            <p>
              <span className="m-2" />
              <span className="text-[#BD67CC]">&#41;</span>
            </p>
            <p>
              <span className="text-[#FED158]">&#125;</span>
            </p>
            <br />
            <p>
              <span className="text-[#F90]">export default</span> <span className="text-[#9BEAF9]">App</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

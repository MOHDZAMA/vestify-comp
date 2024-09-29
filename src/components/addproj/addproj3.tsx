import React from 'react'

function Addproj3() {
  return (
    <div className='h-[956px] w-full bg-white justify-start items-start inline-flex'>
      <div className='h-[956px] w-full pb-8 bg-white flex-col justify-start items-start inline-flex'>
        {/* heading */}
        <div className='h-[102px] p-8 flex-col justify-start items-start gap-2.5 flex'>
          <div className='w-[1288px] justify-start items-center gap-4 inline-flex'>
            <div className="grow shrink basis-0 text-slate-800 text-3xl font-extrabold font-['Plus Jakarta Sans'] leading-[38px]">
              Add new Project
            </div>
          </div>
        </div>

        {/* steps */}
        <div className='w-full  h-[987px] px-8 flex-col justify-start items-start gap-6 flex'>
          <div className='w-[50px] h-[50px] relative origin-top-left rotate-180 bg-[#f9f8fa] rounded-[37.50px]'>
            <div className='w-6 h-6 left-[37px] top-[13px] absolute origin-top-left -rotate-180' />
          </div>
          <div className='w-full self-stretch h-[702px] flex-col justify-start items-center gap-6 flex'>
            <div className='self-stretch bg-white justify-center items-center gap-6 inline-flex'>
              <div className='flex-col justify-start items-center gap-2 inline-flex'>
                <div className='h-6 px-2 py-[3px] bg-[#d7d7d7] rounded-[999px] flex-col justify-center items-center gap-2.5 flex'>
                  <div className="self-stretch text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                    1
                  </div>
                </div>
                <div className="w-[101px] text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                  Basic Information
                </div>
              </div>
              <div className='flex-col justify-start items-center gap-2 inline-flex'>
                <div className='h-6 px-2 py-[3px] bg-[#d7d7d7] rounded-[999px] flex-col justify-center items-center gap-2.5 flex'>
                  <div className="self-stretch text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                    2
                  </div>
                </div>
                <div className="text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                  Token Metrics
                </div>
              </div>
              <div className='flex-col justify-start items-center gap-2 inline-flex'>
                <div className='h-6 px-2 py-[3px] bg-[#d7d7d7] rounded-[999px] flex-col justify-center items-center gap-2.5 flex'>
                  <div className="self-stretch text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                    3
                  </div>
                </div>
                <div className="text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                  Our Deals
                </div>
              </div>
              <div className='flex-col justify-start items-center gap-2 inline-flex'>
                <div className='h-6 px-2 py-[3px] bg-[#d7d7d7] rounded-[999px] flex-col justify-center items-center gap-2.5 flex'>
                  <div className="self-stretch text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                    4
                  </div>
                </div>
                <div className="text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                  Team & Advisor
                </div>
              </div>
              <div className='flex-col justify-start items-center gap-2 inline-flex'>
                <div className='h-6 px-2 py-[3px] bg-[#d7d7d7] rounded-[999px] flex-col justify-center items-center gap-2.5 flex'>
                  <div className="self-stretch text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                    5
                  </div>
                </div>
                <div className="text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                  Socials
                </div>
              </div>
              <div className='flex-col justify-start items-center gap-2 inline-flex'>
                <div className='h-6 px-2 py-[3px] bg-[#d7d7d7] rounded-[999px] flex-col justify-center items-center gap-2.5 flex'>
                  <div className="self-stretch text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                    5
                  </div>
                </div>
                <div className="text-[#667185] text-xs font-medium font-['Inter'] leading-[18px]">
                  Finish
                </div>
              </div>
            </div>

            {/* our deals */}
            <div className='w-[456px] px-7 py-8 bg-white rounded-[10px] border border-[#d0d4dd] justify-start items-start gap-2 inline-flex'>
              <div className='w-full flex-col justify-start items-center gap-8 inline-flex'>
                <div className='w-full flex-col justify-start items-center flex'>
                  <div className='h-[29px] flex-col justify-start items-center gap-2 flex'>
                    <div className="text-[#101828] text-2xl font-semibold font-['Urbanist'] leading-[28.80px]">
                      Our Deals
                    </div>
                  </div>
                </div>
                <div className='w-full self-stretch h-[503px] flex-col justify-start items-center gap-8 flex'>
                  <div className='w-full flex-col justify-start items-start gap-6 flex'>
                    <div className='self-stretch h-20 flex-col justify-start items-start gap-2 flex'>
                      <div className='self-stretch h-20 flex-col justify-start items-start gap-1 flex'>
                        <div className="self-stretch text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                          Minimum
                        </div>
                        <div className='w-full self-stretch h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 justify-start items-center gap-3 inline-flex'>
                          <div className='w-full grow shrink basis-0 h-5 justify-start items-center gap-2 flex'>
                            <div className='justify-start items-center gap-0.5 flex'>
                              <div className="text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight">
                                Enter Minimum
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex-col justify-start items-start gap-6 flex'>
                    <div className='w-full self-stretch h-20 flex-col justify-start items-start gap-2 flex'>
                      <div className='self-stretch h-20 flex-col justify-start items-start gap-1 flex'>
                        <div className="self-stretch text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                          Maximum
                        </div>
                        <div className='w-full self-stretch h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 justify-start items-center gap-3 inline-flex'>
                          <div className='w-full grow shrink basis-0 h-5 justify-start items-center gap-2 flex'>
                            <div className='justify-start items-center gap-0.5 flex'>
                              <div className="text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight">
                                Enter maximum
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex-col justify-start items-start gap-6 flex'>
                    <div className='w-full h-20 flex-col justify-start items-start gap-2 flex'>
                      <div className='self-stretch h-20 flex-col justify-start items-start gap-1 flex'>
                        <div className="self-stretch text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                          Select tokens accepted
                        </div>
                        <div className='w-full self-stretch h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 justify-start items-center gap-3 inline-flex'>
                          <div className='w-full grow shrink basis-0 h-5 justify-start items-center gap-2 flex'>
                            <div className='justify-start items-center gap-0.5 flex'>
                              <div className="text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight">
                                Select token accepted
                              </div>
                            </div>
                          </div>
                          <div className='w-6 h-6 relative origin-top-left -rotate-90' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full flex-col justify-start items-start gap-6 flex'>
                    <div className='w-full self-stretch h-20 flex-col justify-start items-start gap-2 flex'>
                      <div className='self-stretch h-20 flex-col justify-start items-start gap-1 flex'>
                        <div className="self-stretch text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                          Pool Fee
                        </div>
                        <div className='w-full self-stretch h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 justify-start items-center gap-3 inline-flex'>
                          <div className='w-full grow shrink basis-0 h-5 justify-start items-center gap-2 flex'>
                            <div className='justify-start items-center gap-0.5 flex'>
                              <div className="text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight">
                                Enter Pool fee
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='self-stretch h-[55px] px-6 py-4 bg-indigo-600 rounded-lg flex-col justify-center items-center gap-2.5 flex'>
                    <div className='justify-center items-center gap-2 inline-flex'>
                      <div className="text-center text-white text-base font-semibold font-['Urbanist'] leading-normal">
                        Proceed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addproj3

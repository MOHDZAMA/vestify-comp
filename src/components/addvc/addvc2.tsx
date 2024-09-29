import React from 'react'

function Addvc2() {
  return (
    <div className='w-full  h-[1024px] relative bg-[#f7f9fc]'>
      <div className=' px-7 py-8 left-[492px] top-[263.50px] absolute bg-white rounded-[10px] border border-[#d0d4dd] justify-start items-start gap-2 inline-flex'>
        <div className=' flex-col justify-start items-center gap-8 inline-flex'>
          {/** Percent bar */}
          <div className='self-stretch justify-end items-start gap-[15px] inline-flex'>
            <div className='grow shrink basis-0 flex-col justify-start items-end gap-2 inline-flex'>
              <div className='h-2 relative rounded-lg'>
                <div className='w-[400px] h-2 left-0 top-0  bg-[#f2f3f6] rounded' />
                <div className='w-2.5 h-2 left-0 top-0 absolute bg-[#33c90e] rounded' />
              </div>
              <div className="text-[#344053] text-sm font-medium font-['Inter'] leading-tight">
                0%
              </div>
            </div>
          </div>

          {/** Form */}
          <div className='w-[456px] flex-col justify-start items-center flex'>
            <div className='w-full h-[34px] flex-col justify-start items-center gap-2 flex'>
              <div className="text-[#101828] text-[28px] font-semibold font-['Urbanist'] leading-[33.60px]">
                Add new VC
              </div>
            </div>
          </div>
          <div className='w-full self-stretch h-[299px] flex-col justify-start items-start gap-5 flex'>
            <div className='w-full flex-col justify-start items-start gap-6 flex'>
              <div className='self-stretch h-[111px] flex-col justify-start items-start gap-2 flex'>
                <div className='self-stretch h-[111px] flex-col justify-start items-start gap-1 flex'>
                  <div className="self-stretch text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                    VC tags
                  </div>
                  <div className='w-full self-stretch h-[87px] p-4 bg-white rounded-md border border-[#d0d5dd]/60 justify-center items-start gap-3 inline-flex'>
                    <div className='w-full grow shrink basis-0 h-5 justify-start items-center gap-2 flex'>
                      <div className='justify-start items-center gap-0.5 flex'>
                        <div className="text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight">
                          Add project tags
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full justify-start items-center gap-[243px] inline-flex'>
              <div className='w-full justify-start items-center gap-[5px] flex'>
                <div className='px-[2.23px] flex-col justify-start items-center inline-flex' />
                <div className="text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                  KYC
                </div>
              </div>
              <div className='w-full justify-start items-center gap-5 flex'>
                <div className='w-full justify-start items-center gap-2 flex'>
                  <div className='w-[17.46px] h-[17.46px] relative'>
                    <div className='w-[17.46px] h-[17.46px] left-0 top-0 absolute rounded-full border border-[#00b828]' />
                    <div className='w-[10.95px] h-[10.95px] left-[3.25px] top-[3.25px] absolute bg-[#00b828] rounded-full' />
                  </div>
                  <div className="text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                    Yes
                  </div>
                </div>
                <div className='w-full justify-start items-center gap-2 flex'>
                  <div className='w-[17.46px] h-[17.46px] rounded-full border border-[#d1d1d1]' />
                  <div className="text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                    No
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full p-5 bg-[#f2f2ff] rounded-lg justify-start items-center gap-[198px] inline-flex'>
              <div className="text-[#101828] text-lg font-medium font-['Urbanist'] leading-relaxed">
                Subscription fee
              </div>
              <div className="text-[#101828] text-lg font-black font-['Urbanist'] leading-relaxed">
                $70
              </div>
            </div>
            <div className='w-full self-stretch h-[55px] px-6 py-4 bg-indigo-600 rounded-lg flex-col justify-center items-center gap-2.5 flex'>
              <div className='w-full justify-center items-center gap-2 inline-flex'>
                <div className="text-center text-white text-base font-semibold font-['Urbanist'] leading-normal">
                  Proceed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[50px] h-[50px] left-[192px] top-[92px] absolute origin-top-left rotate-180 bg-white rounded-[37.50px]'>
        <div className='w-6 h-6 left-[37px] top-[13px] absolute origin-top-left -rotate-180' />
      </div>
    </div>
  )
}

export default Addvc2

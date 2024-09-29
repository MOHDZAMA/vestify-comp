import React from 'react'

function Addvc() {
  return (
    <div className='w-full h-[1024px] relative bg-[#f7f9fc]'>
      <div className=' px-7 py-8 left-[492px] top-[155px] absolute bg-white rounded-[10px] border border-[#d0d4dd] justify-start items-start gap-2 inline-flex'>
        <div className='w-[456px] flex-col justify-start items-center gap-8 inline-flex'>
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
          <div className='w-full self-stretch h-[516px] flex-col justify-start items-center gap-8 flex'>
            <div className='w-full self-stretch h-[174px] flex-col justify-start items-start gap-1 flex'>
              <div className="self-stretch text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                Upload logo
              </div>
              <div className='w-full  h-[150px] px-[15px] py-4 bg-white rounded-md border border-[#d0d5dd]/60 flex-col justify-center items-center gap-2.5 flex'>
                <div className='w-[30px] h-[30px] relative' />
                <div className='flex-col justify-start items-center gap-[5px] flex'>
                  <div className='justify-start items-center gap-0.5 inline-flex'>
                    <div>
                      <span className="text-[#101828] text-sm font-semibold font-['Urbanist'] leading-tight">
                        Drop your logo here, or
                      </span>
                      <span className="text-[#98a1b2] text-sm font-semibold font-['Urbanist'] leading-tight">
                        {' '}
                      </span>
                      <span className="text-[#3996f5] text-sm font-semibold font-['Urbanist'] leading-tight">
                        browse
                      </span>
                    </div>
                  </div>
                  <div className='w-full justify-start items-center gap-0.5 inline-flex'>
                    <div className="text-[#98a1b2] text-[13px] font-semibold font-['Urbanist'] leading-[18.85px]">
                      Support: JPG,PNG
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex-col justify-start items-start gap-6 flex'>
              <div className='w-full self-stretch h-20 flex-col justify-start items-start gap-2 flex'>
                <div className='self-stretch h-20 flex-col justify-start items-start gap-1 flex'>
                  <div className="self-stretch text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                    VC Name
                  </div>
                  <div className='w-full self-stretch h-14 p-4 bg-white rounded-md border border-[#d0d5dd]/60 justify-start items-center gap-3 inline-flex'>
                    <div className='w-full grow shrink basis-0 h-5 justify-start items-center gap-2 flex'>
                      <div className='justify-start items-center gap-0.5 flex'>
                        <div className="text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight">
                          Enter VC name
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex-col justify-start items-start gap-6 flex'>
              <div className='w-full self-stretch h-[111px] flex-col justify-start items-start gap-2 flex'>
                <div className='self-stretch h-[111px] flex-col justify-start items-start gap-1 flex'>
                  <div className="self-stretch text-[#101828] text-sm font-medium font-['Urbanist'] leading-tight">
                    VC Description
                  </div>
                  <div className='w-full self-stretch h-[87px] p-4 bg-white rounded-md border border-[#d0d5dd]/60 justify-center items-start gap-3 inline-flex'>
                    <div className='w-full grow shrink basis-0 h-5 justify-start items-center gap-2 flex'>
                      <div className='justify-start items-center gap-0.5 flex'>
                        <div className="text-[#98a1b2] text-sm font-normal font-['Urbanist'] leading-tight">
                          VC Description
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Addvc

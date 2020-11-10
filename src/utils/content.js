/*
 * @Description: 
 * @Autor: yll
 * @Date: 2020-11-07 09:22:54
 * @LastEditors: yll
 * @LastEditTime: 2020-11-07 11:18:35
 */
export function content(salary) {
  return (
    <div>
      <p>基本工资：{salary.basicSalary }</p>
      <p>交通补助：{salary.trafficSalary}</p>
      <p>午餐补助：{salary.lunchSalary}</p>
      <p>奖金：{salary.bonus}</p>
      <p>养老金比率：{salary.pensionPer}</p>
      <p>养老金基数：{salary.pensionBase}</p>
      <p>医疗保险比率：{salary.medicalPer}</p>
      <p>医疗保险基数：{salary.medicalBase}</p>
      <p>公积金比率：{salary.accumulationFundPer}</p>
      <p>公积金基数：{salary.accumulationFundBase}</p>
    </div>
  )
}

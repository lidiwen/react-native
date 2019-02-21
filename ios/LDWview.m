//
//  LDWview.m
//  NewCreatTestApp
//
//  Created by lidiwen on 2019/2/21.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "LDWview.h"

@implementation LDWview

-(void)setAppKey:(NSString *)appKey{
  
  UILabel *label = [[UILabel alloc]init];
  label.frame = CGRectMake(0,50,100,50);
  label.font = [UIFont systemFontOfSize:17];
  label.text = appKey;
  label.textColor = [UIColor whiteColor];
  [self addSubview:label];
  
}
@end

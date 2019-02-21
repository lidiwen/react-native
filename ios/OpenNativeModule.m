//
//  OpenNativeModule.m
//  NewCreatTestApp
//
//  Created by lidiwen on 2019/2/21.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "OpenNativeModule.h"
#import "AlertView.h"

@implementation OpenNativeModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(openNativeVC) {
  dispatch_async(dispatch_get_main_queue(), ^{
    
    AlertView *view = [[AlertView alloc]init];
    view.frame = CGRectMake(100,100 , 100, 100);
    view.backgroundColor = [UIColor redColor];
    [[UIApplication sharedApplication].keyWindow addSubview:view];
    
    NSLog(@"你好");
    
  });
}




@end

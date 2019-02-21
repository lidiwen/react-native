//
//  RTCustomView.m
//  NewCreatTestApp
//
//  Created by lidiwen on 2019/2/21.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "RTCustomView.h"
#import <React/RCTComponent.h>
#import "LDWview.h"

@implementation RTCustomView

RCT_EXPORT_MODULE()

- (UIView *)view{
  LDWview *view = [[LDWview alloc] initWithFrame:CGRectZero];
  return view;
}


RCT_EXPORT_VIEW_PROPERTY(appKey, NSString)

@end

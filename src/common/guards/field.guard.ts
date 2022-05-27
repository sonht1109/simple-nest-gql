import { UnauthorizedException } from '@nestjs/common';
import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';
import { EnumRole } from '../enum/enum.role';

export const FieldGuard: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const { info } = ctx;
  const { extensions } = info.parentType.getFields()[info.fieldName];
  if (ctx.source) {
    console.log(ctx.source[extensions.authIdField as any]);
  }
  if (extensions && extensions?.role === EnumRole.ADMIN) {
    return next();
  }
  throw new UnauthorizedException();
};
